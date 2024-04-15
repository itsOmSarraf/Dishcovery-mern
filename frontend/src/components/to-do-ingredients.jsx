import * as React from 'react';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { BookOpenText } from 'lucide-react';
import { v4 } from 'uuid';

const myUuid = v4();

export function IngredientsDrawer({ ingredients }) {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				{/* <button className='btn'>Ingredients</button> */}
				<Button
					variant='outline'
					className='bg-[#f5e5cd] text-black'>
					Ingredients
					<BookOpenText className='ml-2 h-3 w-3' />
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className='mx-auto w-full max-w-sm'>
					<DrawerHeader>
						<DrawerTitle>Ingredients List</DrawerTitle>
					</DrawerHeader>
					<div className='p-4'>
						<ul className='list-disc pl-4'>
							{ingredients.map(({ name, quantity }) => (
								<li key={name}>
									{name} ({quantity})
								</li>
							))}
						</ul>
					</div>
					<DrawerFooter>
						<DrawerClose asChild>
							<button className='btn'>Close Drawer</button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
