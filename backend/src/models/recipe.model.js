import mongoose, { Schema } from 'mongoose';

const Recipe = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		nonVeg: {
			type: String,
			required: true
		},
		oneLiner: {
			type: String,
			required: true
		},
		imageUser: {
			type: String,
			required: false
		},
		imageHf: {
			type: String,
			required: false
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
		ingredients: [
			{
				name: {
					type: String,
					required: true
				},
				quantity: {
					type: String,
					required: true
				}
			}
		],
		directions: [
			{
				step: {
					type: String,
					required: true
				}
			}
		]
	},
	{
		timestamps: true
	}
);

export default mongoose.model('Recipe', Recipe);
