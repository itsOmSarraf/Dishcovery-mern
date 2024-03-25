import Navbar from '@/components/Navbar';
import { CameraIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { CardWithForm } from '@/components/Food-Card';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
	const [foodData, setFoodData] = useState([]);

	useEffect(() => {
		const fetchFoodData = async () => {
			try {
				const response = await axios.get(
					'http://localhost:8000/api/v1/recipes/all'
				);
				console.log(response.data.data.recipes);
				setFoodData(response.data.data.recipes); // Set food data to state
			} catch (error) {
				console.error('Error fetching food data:', error);
			}
		};

		fetchFoodData();
	}, []);

	return (
		<>
			<Navbar />
			<div className='flex flex-col items-center py-5'>
				{foodData.map((food) => (
					<CardWithForm
						key={food._id}
						food={food}
					/>
				))}
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
