import Navbar from '@/components/Navbar';
import { CameraIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { CardWithForm } from '@/components/Food-Card';
import { NavLink } from 'react-router-dom';
export default function Home() {
	return (
		<>
			<Navbar />
			<div className='flex flex-col items-center py-5'>
				<CardWithForm />
				<CardWithForm />
				<CardWithForm />
				<CardWithForm />
				<CardWithForm />
				<CardWithForm />
				<CardWithForm />
				<CardWithForm />
			</div>

			<div className='fixed bottom-4 left-1/2 transform -translate-x-1/2'>
				<Button
					size='default'
					variant='destructive'>
					<CameraIcon className='mr-2 h-4 w-4' />{' '}
					<NavLink to='/upload'>Recommend Me </NavLink>
				</Button>
			</div>
		</>
	);
}
