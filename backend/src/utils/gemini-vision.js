// const { GoogleGenerativeAI } = require('@google/generative-ai');
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY_GEMINI;
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

async function run(nonVeg, typeFood, timeFood, servings, imageData) {
	// For text-and-image input (multimodal), use the gemini-pro-vision model
	const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });

	const prompt = `suggest me a ${
		nonVeg ? 'nonveg' : 'veg'
	} recipe for ${typeFood} dish for ${timeFood} for ${servings} people with these ingredients in a json object format and keep the measuring terms in grams/kilograms, tablespoons literes/milliliters , the object format shall be { recipe:"",oneLiner:"",approxCookingTime:"mins/hrs",approxCalroies:"",serving:"",ingredients:[{name:,quantity:},{name:,quantity:}],instructions:[{step:},{step:}]}`;

	const result = await model.generateContent([
		prompt,
		{ inlineData: { data: imageData, mimeType: 'image/jpeg' } }
	]);
	const response = result.response;
	const text = response.text();
	console.log(text);
	return text;
}

export default run;
