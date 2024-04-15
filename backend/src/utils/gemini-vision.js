import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import { fileToGenerativePart } from './fileUtils.js'; // Importing the fileToGenerativePart function
dotenv.config();

const API_KEY = process.env.API_KEY_GEMINI;
const genAI = new GoogleGenerativeAI(API_KEY);
async function run(nonVeg, typeFood, timeFood, servings, imageData) {
	const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });

	const prompt = `suggest me a ${
		nonVeg ? 'nonveg' : 'veg'
	} recipe for ${typeFood} dish for ${timeFood} for ${servings} people with these ingredients in a json object format and keep the measuring terms in grams/kilograms, tablespoons literes/milliliters , the object format shall be 
	{ what_you_saw_in_the_image:"seperate with commas",recipeName:"",oneLiner:"",approxCookingTime:"mins/hrs",approxCalroies:"",serving:"",ingredients:[{name:,quantity:},{name:,quantity:}],instructions:[{step:},{step:}],nonVeg:${nonVeg},typeFood:${typeFood},timeFood:${timeFood}}
	`;

	try {
		const generativePart = await fileToGenerativePart(imageData, 'image/jpeg');
		const result = await model.generateContent([prompt, generativePart]);

		const response = result.response;
		const text = response.text();
		console.log(text);
		return text;
	} catch (error) {
		console.error('Error in run function:', error);
		throw error; // Re-throw the error to be caught by the calling function
	}
}

export default run;
