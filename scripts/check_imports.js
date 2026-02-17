const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getGitFiles() {
  const out = execSync('git ls-files', { encoding: 'utf8' });
  return out.split('\n').filter(Boolean);
}

function readFiles(dir, exts = ['.js', '.jsx', '.ts', '.tsx', '.css', '.module.css']) {
  const files = [];
  const items = fs.readdirSync(dir);
  for (const it of items) {
    const full = path.join(dir, it);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      files.push(...readFiles(full, exts));
    } else if (exts.includes(path.extname(full))) {
      files.push(full.replace(/\\/g, '/'));
    }
  }
  return files;
}

function resolveCandidates(baseDir, importPath) {
  const candidates = [];
  const full = path.join(baseDir, importPath);
  const ext = path.extname(full);
  if (ext) {
    candidates.push(full);
  } else {
    ['.js', '.jsx', '.ts', '.tsx', '.css', '.module.css', '/index.js', '/index.jsx', '/index.ts', '/index.tsx'].forEach(e => candidates.push(full + e));
  }
  return candidates.map(c => path.normalize(c).replace(/\\/g, '/'));
}

function main() {
  const gitFiles = getGitFiles();
  const srcDir = path.join(process.cwd(), 'src');
  if (!fs.existsSync(srcDir)) {
    console.error('No src/ directory');
    process.exit(1);
  }
  const files = readFiles(srcDir);
  const importRegex = /import\s+[^'\"]+['\"]([^'\"]+)['\"]/g;
  const errors = [];
  const warnings = [];

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = importRegex.exec(content)) !== null) {
      const importPath = m[1];
      if (!importPath.startsWith('.')) continue;
      const baseDir = path.dirname(file);
      const candidates = resolveCandidates(baseDir, importPath);
      const found = candidates.find(c => gitFiles.includes(path.relative(process.cwd(), c).replace(/\\/g, '/')));
      if (!found) {
        errors.push({ file, importPath, candidates });
      } else {
        const real = gitFiles.find(g => g === path.relative(process.cwd(), found).replace(/\\/g, '/'));
        if (real) {
          const resolved = path.relative(path.dirname(file), real).replace(/\\/g, '/');
          let importNormalized = importPath.replace(/\.(js|jsx|ts|tsx|css|module.css)$/i, '');
          if (!importNormalized.startsWith('.')) importNormalized = './' + importNormalized;
          const resolvedNoExt = resolved.replace(/\.(js|jsx|ts|tsx|css|module.css)$/i, '');
          if (!importNormalized.endsWith(resolvedNoExt)) {
            warnings.push({ file, importPath, real });
          }
        }
      }
    }
  }

  if (errors.length) {
    console.error('Missing imports:');
    errors.forEach(e => console.error(`- ${e.file}: import '${e.importPath}' -> candidates: ${e.candidates.join(', ')}`));
  }
  if (warnings.length) {
    console.warn('Case/normalized mismatches (possible case-sensitivity issues):');
    warnings.forEach(w => console.warn(`- ${w.file}: import '${w.importPath}' -> real: ${w.real}`));
  }
  if (!errors.length && !warnings.length) console.log('No missing imports found.');
  if (errors.length) process.exit(2);
}

main();
