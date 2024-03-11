import mongoose from 'mongoose';
import Recipe from '../models/recipe.model';
import asyncHandler from 'express-async-handler';

const recipeAll = asyncHandler(async (req, res) => {
	const recipes = await Recipe.find({});
	res.status(200).json({ recipes: recipes });
});
