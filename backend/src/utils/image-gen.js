const fs = require('fs');
require('dotenv').config();
const API_TOKEN_HF = process.env.API_KEY_HF;

async function query(data) {
	const response = await fetch(
		'https://api-inference.huggingface.co/models/playgroundai/playground-v2-1024px-aesthetic',
		{
			headers: { Authorization: `Bearer ${API_TOKEN_HF}` },
			method: 'POST',
			body: JSON.stringify(data)
		}
	);
	const result = await response.blob();

	// Write the blob data to a file
	fs.writeFileSync(
		'sample_images/response_image.png',
		Buffer.from(await result.arrayBuffer())
	);

	return result;
}

query({
	inputs:
		'Aloo Posto is a Bengali vegetarian dish made with potatoes and poppy seeds.'
}).then((response) => {
	// Handle the response or perform additional tasks
});
