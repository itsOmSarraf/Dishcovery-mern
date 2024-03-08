const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
require('dotenv').config();

const API_KEY = process.env.API_KEY_GEMINI;
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
	return {
		inlineData: {
			data: Buffer.from(fs.readFileSync(path)).toString('base64'),
			mimeType
		}
	};
}

async function run() {
	// For text-and-image input (multimodal), use the gemini-pro-vision model
	const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });

	const prompt =
		'suggest me a recipe for south-indian dish with these ingredients in a json object format and keep the measuring terms in grams/kilograms, tablespoons literes/milliliters , the object format shall be { recipe:"",ingredients:[{name:,quantity:},{name:,quantity:}],instructions:[{step:},{step:}]}';
	const imageParts = [
		fileToGenerativePart('sample_images/image.jpg', 'image/jpeg')
	];

	const result = await model.generateContent([prompt, ...imageParts]);
	const response = result.response;
	const text = response.text();
	console.log(text);
}

run();
