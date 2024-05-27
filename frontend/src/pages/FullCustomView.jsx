import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to import axios
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IngredientsDrawer } from '@/components/to-do-ingredients';
import { Button } from '@/components/ui/button';
import { HeartIcon } from 'lucide-react';
import { TimerIcon } from '@radix-ui/react-icons';
import Navbar from '@/components/Navbar';

export default function FullCustomView() {
	const { foodid } = useParams();
	const [foodData, setFoodData] = useState({});
	const [isLoading, setIsLoading] = useState(true); // Add a loading state

	useEffect(() => {
		const fetchFoodData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:8000/api/v1/recipes/full/${foodid}`
				);
				setFoodData(response.data.data.recipe); // Set food data to state
				setIsLoading(false); // Set loading to false after fetching data
			} catch (error) {
				console.error('Error fetching food data:', error);
				setIsLoading(false); // Also set loading to false in case of error
			}
		};

		fetchFoodData();
	}, [foodid]); // Add foodid as a dependency

	if (isLoading) {
		return <div>Loading...</div>; // Render a loading indicator
	}

	const {
		name,
		nonVeg,
		timeFood,
		oneLiner,
		approxTime,
		approxCalories,
		ingredients,
		directions, // Use directions instead of instructions
		serving
	} = foodData;

	return (
		<>
			<Navbar />
			<div className='flex flex-col items-center py-5'>
				<Card className='w-[350px] m-2'>
					<CardHeader className='flex-row justify-between gap-2'>
						<div className='flex flex-row md:flex-row gap-4 items-center md:items-start'>
							<div className='flex-1'>
								<div className='text-2xl mb-2 font-bold'>{name}</div>
								<p>{oneLiner}</p>
							</div>
							<img src='https://via.placeholder.com/150' />
						</div>
					</CardHeader>
					<CardContent>
						<div className='mb-5'>
							<Badge variant='secondary'>{nonVeg ? 'Veg' : 'Nonveg'}</Badge>
							<Badge variant='secondary'>{timeFood}</Badge>
							<Badge variant='secondary'>
								<TimerIcon className='h-2 w-2 mr-1' />
								{approxTime}
							</Badge>
							<Badge variant='secondary'>{approxCalories} Calories</Badge>
							<Badge variant='secondary'>{serving} serving(s)</Badge>
						</div>
						<div className='flex w-full justify-between'>
							<IngredientsDrawer ingredients={ingredients} />
							{/* <Button
								variant='outline'
								className='bg-red-500 text-white'>
								Like
								<HeartIcon className='ml-2 h-4 w-4' />
							</Button> */}
						</div>
						<div className='text-center my-4'>Instructions:</div>
						<ol className='list-decimal space-y-4 pl-9'>
							{directions &&
								directions.map((direction, index) => (
									<li key={index}>{direction.step}</li>
								))}
						</ol>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
