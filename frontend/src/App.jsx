// App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import { ThemeProvider } from '@/components/theme-provider';

function App() {
	return (
		<ThemeProvider
			defaultTheme='dark'
			storageKey='vite-ui-theme'>
			<Router>
				<AppRoutes />
			</Router>
		</ThemeProvider>
	);
}

export default App;
