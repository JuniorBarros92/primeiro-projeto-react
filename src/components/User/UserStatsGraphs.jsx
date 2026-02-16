import React from 'react';
import styles from './UserStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (!Array.isArray(data)) return;

    const graphData = data.map((item) => {
      return {
        x: item.title || `Foto ${item.id || ''}`,
        y: Number(item.acessos) || 0,
      };
    });

    const totalAccess = data
      .map(({ acessos }) => Number(acessos) || 0)
      .reduce((a, b) => a + b, 0);

    setTotal(totalAccess);
    setGraph(graphData);
  }, [data]);
  

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          key={graph.map((g) => g.x).join('-') || 'pie'}
          data={graph}
          innerRadius={50}
          animate={{ duration: 500 }}
          height={220}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart key={graph.map((g) => g.x).join('-') || 'chart'} domainPadding={{ x: [20, 20] }} height={220}>
          <VictoryBar alignment="start" data={graph} animate={{ duration: 500 }} />
        </VictoryChart>
      </div>

     
    </section>
  );
};

export default UserStatsGraphs;
