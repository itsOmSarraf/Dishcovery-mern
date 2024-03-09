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
import image from '../../../sample_images/response_image.png';
import { Badge } from '@/components/ui/badge';
import { NavLink } from 'react-router-dom';
import { CookingPot } from 'lucide-react';
export function CardWithForm() {
	return (
		<Card className='w-[300px] m-2'>
			<CardHeader>
				<div className='flex flex-row md:flex-row gap-4 items-center md:items-start'>
					<div className='flex-1'>
						<CardTitle className='mb-2'>Recipe Name</CardTitle>
						<CardDescription>
							Aloo Posto is a Bengali vegetarian dish made with potatoes and
							poppy seeds.
						</CardDescription>
					</div>
					<div className='flex-shrink-0'>
						<img
							src={image}
							alt='recipe'
							className='rounded-md w-[100px] h-[100px] md:w-auto'
						/>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<Badge variant='secondary'>Veg</Badge>
				<Badge variant='secondary'>Snacks</Badge>
				<Badge variant='secondary'>
					<TimerIcon className='h-2 w-2 mr-1 p-0 m-0' />
					30 mins
				</Badge>
				<Badge variant='secondary'>Indian</Badge>
			</CardContent>
			<CardFooter className='flex justify-between'>
				<Button variant='outline'>
					Like
					<HeartIcon className='ml-2 h-4 w-4' />
				</Button>
				<Button>
					<NavLink to='/full'>Cook</NavLink>
					<CookingPot className='ml-2 h-4 w-4' />
				</Button>
			</CardFooter>
		</Card>
	);
}
