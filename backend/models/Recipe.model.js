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
		image: {
			type: String,
			required: true
		},
		approxTime: {
			type: String,
			required: true
		},
		approcalories: {
			type: String,
			required: true
		},
		serving: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		GeoGraphy: {
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
