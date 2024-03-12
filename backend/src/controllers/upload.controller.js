import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import run from '../utils/gemini-vision.js';

const getResponse = asyncHandler(async (req, res) => {
	// Extract data from request
	const { nonVeg, typeFood, timeFood, servings } = req.body;
	const imageFile = req.file;

	console.log('formdata', { nonVeg, typeFood, timeFood, servings });
	console.log('Image data', imageFile);

	try {
		// Wait for the completion of the run function
		const responseFromRun = await run(
			nonVeg,
			typeFood,
			timeFood,
			servings,
			imageFile.buffer // Use imageFile.buffer instead of imageFile.path
		);

		// Send the response to the frontend as JSON
		res
			.status(200)
			.json(
				new ApiResponse(
					200,
					{ response: responseFromRun },
					'Response from run function'
				)
			);
	} catch (error) {
		// Handle any errors that occurred during the run function
		console.error('Error in run function:', error);
		res.status(500).json(new ApiError(500, 'Internal Server Error'));
	}
});

export { getResponse };
