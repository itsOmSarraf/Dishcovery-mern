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
const ingredients = [
	{ id: 'potatoes', label: 'Potatoes (500 grams)' },
	{ id: 'onion', label: 'Onion (100 grams)' },
	{ id: 'poppy_seeds', label: 'Poppy Seeds (100 grams)' },
	{ id: 'garlic', label: 'Garlic (2 cloves)' },
	{ id: 'green_chilies', label: 'Green Chilies (2)' },
	{ id: 'turmeric_powder', label: 'Turmeric Powder (1 teaspoon)' },
	{ id: 'red_chili_powder', label: 'Red Chili Powder (1 teaspoon)' },
	{ id: 'cumin_powder', label: 'Cumin Powder (1 teaspoon)' },
	{ id: 'mustard_oil', label: 'Mustard Oil (2 tablespoons)' },
	{ id: 'salt', label: 'Salt (to taste)' }
];

export function IngredientsDrawer() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				{/* <button className='btn'>Ingredients</button> */}
				<Button
					variant='outline'
					className='bg-[#f5e5cd] text-black'>
					Ingredients
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className='mx-auto w-full max-w-sm'>
					<DrawerHeader>
						<DrawerTitle>Ingredients List</DrawerTitle>
					</DrawerHeader>
					<div className='p-4'>
						<ul className='list-disc pl-4'>
							{ingredients.map(({ id, label }) => (
								<li key={id}>{label}</li>
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
