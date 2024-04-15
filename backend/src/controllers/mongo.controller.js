import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import recipeModel from '../models/recipe.model.js';

const uploadToDb = asyncHandler(async (req, res) => {
	let recipeData = req.body;
	if (!recipeData) {
		throw new ApiError(400, 'recipeData is missing in the request body');
	}
	const {
		recipeName,
		oneLiner,
		approxCookingTime,
		approxCalories,
		ingredients,
		instructions,
		serving,
		nonVeg,
		typeFood,
		timeFood,
		imageData
	} = recipeData;
	try {
		const newRecipe = await recipeModel.create({
			name: recipeName,
			oneLiner: oneLiner,
			approxTime: approxCookingTime,
			approxCalories: approxCalories,
			serving: serving,
			ingredients: ingredients,
			directions: instructions,
			timeFood: timeFood,
			typeFood: typeFood,
			nonVeg: nonVeg
		});
		res
			.status(200)
			.json(new ApiResponse(200, newRecipe, 'Recipe uploading successful'));
	} catch (error) {
		throw new ApiError(500, error.message || 'Error uploading to db');
	}
});

export { uploadToDb };
