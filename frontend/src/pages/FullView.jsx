import Confirm from '@/components/Confim';
import * as React from 'react';
import { HeartIcon } from 'lucide-react';
import { TimerIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IngredientsDrawer } from '@/components/to-do-ingredients';

export default function FullView() {
	const recipeData = localStorage.getItem('recipeData');
	const cleanJSONobj = recipeData
		? JSON.parse(recipeData.replace(/```json\n|\n```/g, ''))
		: null;
	// console.log(cleanJSONobj);

	if (!cleanJSONobj) {
		return <div>Loading...</div>; // Or any other loading indication you prefer
	}

	const {
		recipeName,
		oneLiner,
		approxCookingTime,
		approxCalories,
		ingredients,
		instructions,
		serving
	} = cleanJSONobj;

	return (
		<>
			<Confirm />
			<div className='flex flex-col items-center py-5'>
				<Card className='w-[350px] m-2'>
					<CardHeader className='flex-row justify-between gap-2'>
						<div className='flex flex-row md:flex-row gap-4 items-center md:items-start'>
							<div className='flex-1'>
								<div className='text-2xl mb-2'>{recipeName}</div>
								<p>{oneLiner}</p>
							</div>
							<img src='https://via.placeholder.com/150' />
						</div>
					</CardHeader>
					<CardContent>
						<div className='mb-5'>
							<Badge variant='secondary'>Veg</Badge>
							<Badge variant='secondary'>Snacks</Badge>
							<Badge variant='secondary'>
								<TimerIcon className='h-2 w-2 mr-1' />
								{approxCookingTime}
							</Badge>
							<Badge variant='secondary'>{approxCalories} Calories</Badge>
							<Badge variant='secondary'>{serving}</Badge>
						</div>
						<div className='flex w-full justify-between'>
							<IngredientsDrawer ingredients={ingredients} />
							<Button
								variant='outline'
								className='bg-red-500 text-white'>
								Like
								<HeartIcon className='ml-2 h-4 w-4' />
							</Button>
						</div>
						<div class='text-center my-4'>Instructions:</div>
						<ol class='list-decimal space-y-4 pl-9'>
							{instructions.map((instruction, index) => (
								<li key={index}>{instruction.step}</li>
							))}
						</ol>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
