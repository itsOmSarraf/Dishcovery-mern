import sharp from 'sharp';

// Function to convert base64 string to Buffer
function base64ToBuffer(base64String) {
	const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
	return Buffer.from(base64Data, 'base64');
}

// Function to iteratively compress the image
async function compressImage(base64String, targetSizeKB = 35) {
	let buffer = base64ToBuffer(base64String);
	let quality = 80; // Initial quality
	let width = undefined; // Let sharp determine the width initially

	while (true) {
		const output = await sharp(buffer)
			.resize({ width, withoutEnlargement: true }) // Resize based on width
			.jpeg({ quality }) // Compress with JPEG format
			.toBuffer();

		if (output.byteLength <= targetSizeKB * 1024) {
			// If the output size is within the target size or quality is too low, stop
			console.log(output.toString('base64'));
			return output.toString('base64'); // Return the compressed image as base64 string
		} else {
			// Adjust quality and width for the next iteration
			quality -= 10; // Decrease quality
			width = width
				? Math.floor(width * 0.9)
				: Math.floor(
						Math.sqrt(output.byteLength / (targetSizeKB * 1024)) * 1000
				  );
		}
	}
}

export default compressImage;
