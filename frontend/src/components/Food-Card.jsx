import * as React from 'react';
import { HeartIcon } from 'lucide-react';
import { TimerIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CookingPot } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function CardWithForm({ food }) {
	const handleViewDetails = () => {
		// Send the food ID to the backend to fetch details for that recipe
		console.log('Viewing details for recipe:', food._id);
	};

	return (
		<Card className='w-[300px] m-2'>
			<CardHeader>
				<div className='flex flex-row md:flex-row gap-4 items-center md:items-start'>
					<div className='flex-1'>
						<CardTitle className='mb-2'>{food.name}</CardTitle>
						<CardDescription>{food.oneLiner}</CardDescription>
					</div>
					<div className='flex-shrink-0'></div>
				</div>
			</CardHeader>
			<CardContent>
				<Badge variant='secondary'>
					{food.nonVeg === 'true' ? 'Non-Veg' : 'Veg'}
				</Badge>
				{/* Render other badges based on food object properties */}
				<Badge variant='secondary'>{food.approxTime}</Badge>
				<Badge variant='secondary'>{food.typeFood}</Badge>
				<Badge variant='secondary'>{food.serving}</Badge>
				<Badge variant='secondary'>{food.timeFood}</Badge>
				<Badge variant='secondary'>{food.approxCalories}</Badge>
			</CardContent>
			<CardFooter className='flex justify-between'>
				<Button variant='outline'>
					Like
					<HeartIcon className='ml-2 h-4 w-4' />
				</Button>
				<Button onClick={handleViewDetails}>
					<NavLink to={`/full/${food._id}`}>View</NavLink>
					<CookingPot className='ml-2 h-4 w-4' />
				</Button>
			</CardFooter>
		</Card>
	);
}
