import mongoose from 'mongoose';
import Recipe from '../models/recipe.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const recipeAll = asyncHandler(async (req, res) => {
	const recipes = await Recipe.find({});
	return res
		.status(200)
		.json(
			new ApiResponse(200, { recipes: recipes }, 'Hello World from recipes')
		);
});

const recipeSolo = asyncHandler(async (req, res) => {
	const foodId = req.params.foodid;
	const recipe = await Recipe.findById(foodId);
	return res
		.status(200)
		.json(
			new ApiResponse(200, { recipe: recipe }),
			'Here is the dish you wanted'
		);
});

export { recipeAll, recipeSolo };
