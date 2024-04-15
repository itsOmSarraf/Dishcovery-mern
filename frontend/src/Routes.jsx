// Routes.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SplashScreen from './pages/Splashscreen';
import Home from './pages/Home';
import Full from './pages/FullView';
import UploadView from './pages/UploadView';

function AppRoutes() {
	return (
		<Routes>
			<Route
				path='/'
				element={<SplashScreen />}
			/>
			<Route
				path='/home'
				element={<Home />}
			/>
			<Route
				path='/full/:foodid'
				element={<Full />}
			/>
			<Route
				path='/upload'
				element={<UploadView />}
			/>
		</Routes>
	);
}

export default AppRoutes;
