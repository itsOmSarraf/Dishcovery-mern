import mongoose, { Schema } from 'mongoose';

const Recipe = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		oneliner: {
			type: String,
			required: true
		},
		imageUser: {
			type: String,
			required: true
		},
		imageHf: {
			type: String,
			required: true
		},
		approxTime: {
			type: String,
			required: true
		},
		approxCalories: {
			type: String,
			required: true
		},
		serving: {
			type: String,
			required: true
		},
		typeFood: {
			type: String,
			required: true
		},
		timeFood: {
			type: String,
			required: true
		},
		ingredients: {
			type: { 'name:': String, 'quantity:': String },
			required: true
		},
		directions: {
			type: [String],
			required: true
		}
	},
	{
		timestamps: true
	}
);

export default mongoose.model('Recipe', Recipe);
