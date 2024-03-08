// Routes.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SplashScreen from './pages/Splashscreen';
import Home from './pages/Home';
import Full from './pages/FullView';
// import About from './pages/About';

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
				path='/full'
				element={<Full />}
			/>
			//{' '}
			{/* <Route
			// 	path='/about'
			// 	element={<About />}
			// /> */}
		</Routes>
	);
}

export default AppRoutes;
