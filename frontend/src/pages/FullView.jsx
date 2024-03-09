import Navbar from '@/components/Navbar';
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
import { IngredientsDrawer } from '@/components/to-do-ingredients';
export default function FullView() {
	return (
		<>
			<Navbar />
			<div className='flex flex-col items-center py-5'>
				<Card className='w-[350px] m-2'>
					<CardHeader className='flex-row justify-between gap-2'>
						<div className='flex flex-row md:flex-row gap-4 items-center md:items-start'>
							<div className='flex-1'>
								<div className='text-2xl mb-2'>Recipe Name</div>
								<p>
									Aloo Posto is a Bengali vegetarian dish made with potatoes and
									poppy seeds.
								</p>
							</div>
							<div className='flex-shrink-0'>
								<img
									src={image}
									alt='recipe'
									className='w-[150px] h-[150px] md:w-auto'
								/>
							</div>
						</div>
					</CardHeader>
					<CardContent>
						<div className='mb-5'>
							<Badge variant='secondary'>Veg</Badge>
							<Badge variant='secondary'>Snacks</Badge>
							<Badge variant='secondary'>
								<TimerIcon className='h-2 w-2 mr-1' />
								30 mins
							</Badge>
							<Badge variant='secondary'>Indian</Badge>
						</div>
						<div className='flex w-full justify-between'>
							<IngredientsDrawer />
							<Button
								variant='outline'
								className='bg-red-500 text-white'>
								Like
								<HeartIcon className='ml-2 h-4 w-4' />
							</Button>
						</div>
						<div class='text-center my-4'>Instructions:</div>
						<ol class='list-decimal space-y-4 pl-9'>
							<li>Peel and chop the potatoes into small cubes.</li>
							<li>
								Heat the mustard oil in a pan and add the cumin seeds. When the
								cumin seeds splutter, add the chopped onions and garlic cloves.
							</li>
							<li>
								Saute the onions until they are translucent. Add the turmeric
								powder, red chili powder, and cumin powder and mix well.
							</li>
							<li>
								Add the chopped potatoes and green chilies and mix well. Add
								salt to taste.
							</li>
							<li>
								Cover the pan and cook the potatoes until they are tender.
							</li>
							<li>
								While the potatoes are cooking, grind the poppy seeds into a
								fine paste.
							</li>
							<li>
								Once the potatoes are cooked, add the poppy seed paste and mix
								well.
							</li>
							<li>Serve hot with rice or roti.</li>
						</ol>
					</CardContent>
					{/* <CardFooter className='flex justify-between'> */}
					{/* </CardFooter> */}
				</Card>
			</div>
		</>
	);
}
