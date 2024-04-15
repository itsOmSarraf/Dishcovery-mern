import logo from '../assets/logo.svg';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

export default function SplashScreen() {
	return (
		<div className=' w-full h-screen overflow-hidden flex flex-col items-center justify-center'>
			<h1 className='text-5xl font-bold mb-10'>Dishcovery</h1>
			<div className='w-full h-1/2 rounded-full overflow-hidden'>
				<img
					src={logo}
					alt='logo of Dishcovery, a mobile app that helps users discover new recipes using AI to visually identify food ingredients'
					className='w-full h-full'
				/>
			</div>
			<Button
				className='mb-36 mt-10'
				asChild>
				<NavLink to='/home'>Get Started</NavLink>
			</Button>
		</div>
	);
}
