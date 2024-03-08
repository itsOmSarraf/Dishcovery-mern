import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from './mode-toggle';

export default function Navbar() {
	return (
		<div className='w-full'>
			<div className='flex justify-between w-full p-2 mx-auto'>
				<Avatar>
					<AvatarImage src='https://avatars.githubusercontent.com/u/124599?v=4' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<ModeToggle />
			</div>
		</div>
	);
}
