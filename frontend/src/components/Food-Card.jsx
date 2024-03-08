import * as React from 'react';
import { HeartIcon } from 'lucide-react';
import { Timer } from 'lucide-react';
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
import { NavLink } from 'react-router-dom';
export function CardWithForm() {
	return (
		<Card className='w-[300px] m-2'>
			<CardHeader>
				<CardTitle>Recipe Name</CardTitle>
				<CardDescription>One liner of the dish</CardDescription>
			</CardHeader>
			<CardContent>
				<Badge variant='secondary'>Veg</Badge>
				<Badge variant='secondary'>Snacks</Badge>
				<Badge variant='secondary'>
					<Timer className='h-3 w-3 mr-1' />
					Time
				</Badge>
				<Badge variant='secondary'>Indian</Badge>
			</CardContent>
			<CardFooter className='flex justify-between'>
				<Button variant='outline'>
					Like
					<HeartIcon className='ml-2 h-4 w-4' />
				</Button>
				<Button>
					<NavLink to='/full'>View</NavLink>
				</Button>
			</CardFooter>
		</Card>
	);
}
