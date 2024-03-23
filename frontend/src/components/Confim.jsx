import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
	const navigate = useNavigate();
	const [userAction, setUserAction] = useState(null);

	const handleUserAction = async (action) => {
		setUserAction(action);
		console.log(action);
		if (action == 'Regen') {
			navigate('/upload');
		} else {
			const recipeData = localStorage.getItem('recipeData');
			const cleanJSONobj = recipeData
				? JSON.parse(recipeData.replace(/```json\n|\n```/g, ''))
				: null;
			console.log(cleanJSONobj);
			try {
				const response = await axios.post(
					'http://localhost:8000/api/v1/db/upload',
					cleanJSONobj
				);
				console.log(response);
			} catch (error) {
				console.error('error', error);
			}
		}
	};

	return (
		<div className='w-full'>
			<div className='flex justify-between items-center w-full p-2 mx-auto shadow-2xl border-b-2 border-gray-800'>
				<div className='flex items-center mx-auto'>
					<AlertDialog>
						<AlertDialogTrigger asChild>
							<Button variant='outline'>Show Dialog</Button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
								<AlertDialogDescription>
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel onClick={() => handleUserAction('Regen')}>
									Regenerate
								</AlertDialogCancel>
								<AlertDialogAction onClick={() => handleUserAction('Continue')}>
									Fits the need
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</div>
			</div>
		</div>
	);
}
