import Navbar from '@/components/Navbar';
import { CameraIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { CardWithForm } from '@/components/Food-Card';

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
			<div className='fixed bottom-0 left-0 right-0 flex items-center justify-center z-0 pointer-events-none mb-10'>
				<div className='z-10'>
					<Button
						size-='sm'
						variant='destructive'
						className='relative'>
						<CameraIcon className='mr-2 h-4 w-4' /> Upload Image
					</Button>
				</div>
			</div>
		</>
	);
}
