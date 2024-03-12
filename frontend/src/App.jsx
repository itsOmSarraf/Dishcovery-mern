// App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

function App() {
	return (
		<ThemeProvider
			defaultTheme='light'
			storageKey='vite-ui-theme'>
			<Router>
				<AppRoutes />
			</Router>
			<Toaster />
		</ThemeProvider>
	);
}

export default App;
