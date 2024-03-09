import { ModeToggle } from './mode-toggle';
import logo from '../assets/logo-copy.svg';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
	return (
		<div className='w-full'>
			<div className='flex justify-between items-center w-full p-2 mx-auto shadow-2xl border-b-2 border-gray-800'>
				<div className='flex items-center'>
					<img
						src={logo}
						alt='logo'
						className='ml-2 w-10 h-10 rounded-full mr-1'
					/>
					<NavLink
						to='/home'
						className='text-2xl font-bold ml-2'>
						DishCovery
					</NavLink>
				</div>
				<ModeToggle />
			</div>
		</div>
	);
}
