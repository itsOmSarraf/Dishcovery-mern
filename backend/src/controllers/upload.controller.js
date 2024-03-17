import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import run from '../utils/gemini-vision.js';
import compressImage from '../utils/imageCompressor.js';

const getResponse = asyncHandler(async (req, res) => {
	const { nonVeg, typeFood, timeFood, servings, imageData } = req.body;
	console.log('formdata', { nonVeg, typeFood, timeFood, servings });
	console.log('Image data', imageData);

	try {
		const compressedBase64Image = await compressImage(imageData);

		const responseFromRun = await run(
			nonVeg,
			typeFood,
			timeFood,
			servings,
			compressedBase64Image
		);

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
		console.error('Error in run function:', error);
		res.status(500).json(new ApiError(500, 'Internal Server Error'));
	}
});

export { getResponse };
