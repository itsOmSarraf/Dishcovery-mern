import axios from 'axios';
// ...
function onSubmit(data) {
	// Create a FormData object
	const formData = new FormData();

	// Append form data to the FormData object
	formData.append('nonVeg', data.nonveg);
	formData.append('servings', data.servings);
	formData.append('typeFood', data.typeFood);
	formData.append('timeFood', data.timeFood);
	// Append the image file
	formData.append('image', data.image[0]);
	// Make a POST request using Axios
	axios
		.post('http://your-backend-api/upload', formData)
		.then((response) => {
			console.log('Success:', response.data);
			// Handle success, e.g., show a success message
			toast({
				title: 'Form Submitted Successfully',
				description: 'Your form has been submitted successfully!',
				status: 'success'
			});
		})
		.catch((error) => {
			console.error('Error:', error);
			// Handle error, e.g., show an error message
			toast({
				title: 'Error',
				description:
					'There was an error submitting the form. Please try again.',
				status: 'error'
			});
		});
}
