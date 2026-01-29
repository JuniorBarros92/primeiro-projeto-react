import ReactDOM from 'react-dom/client';
import React from 'react';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserStorage } from './UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<UserStorage>
				<App />
			</UserStorage>
		</BrowserRouter>
	</StrictMode>,
);
