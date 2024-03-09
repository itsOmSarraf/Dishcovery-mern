import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CameraIcon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { CookingPot } from 'lucide-react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';

export default function UploadView() {
	return (
		<>
			<Navbar />
			<div className='p-4'>
				<Card className='w-full max-w-sm p-4 flex flex-col items-center'>
					<div className='w-[100px] flex flex-col items-center justify-center bg-[#f5e5cd] text-black shadow hover:bg-[#f5e5cd]/90 px-3 py-1 rounded-md'>
						<Label
							htmlFor='picture'
							className='flex items-center'>
							<CameraIcon className='w-8 h-8' />
							<span className='ml-2'>Upload</span>
						</Label>
						<Input
							id='picture'
							type='file'
							className='hidden'
						/>
					</div>
					<div className='mt-4 flex items-center'>
						<span className='mr-2'>Veg</span>
						<Switch className='mx-1' />
						<span className='ml-2'>Non-Veg</span>
					</div>
					<div className='mt-4'>
						<Select>
							<SelectTrigger className='w-[180px]'>
								<SelectValue placeholder='Select Type of Food' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value='indian'>Indian</SelectItem>
									<SelectItem value='south_indian'>South Indian</SelectItem>
									<SelectItem value='italian'>Italian</SelectItem>
									<SelectItem value='chinese'>Chinese</SelectItem>
									<SelectItem value='mexican'>Mexican</SelectItem>
									<SelectItem value='japanese'>Japanese</SelectItem>
									<SelectItem value='mediterranean'>Mediterranean</SelectItem>
									<SelectItem value='thai'>Thai</SelectItem>
									<SelectItem value='french'>French</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className='mt-4'>
						<Select>
							<SelectTrigger className='w-[180px]'>
								<SelectValue placeholder='Select Time of Food' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value='breakfast'>Breakfast</SelectItem>
									<SelectItem value='lunch'>Lunch</SelectItem>
									<SelectItem value='dinner'>Dinner</SelectItem>
									<SelectItem value='snacks'>Snacks</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className='flex w-full max-w-sm items-center gap-1.5 justify-evenly mt-3'>
						<Label htmlFor='serving'>How many servings?</Label>
						<Input
							type='number'
							id='serving'
							defaultValue='1'
							className='w-[60px]'
						/>
					</div>
					<Button className='my-3'>
						Cook
						<CookingPot className='ml-2 h-4 w-4' />
					</Button>
				</Card>
			</div>
		</>
	);
}
