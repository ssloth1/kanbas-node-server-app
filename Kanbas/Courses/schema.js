import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
	_id: { type: String, required: true },
	name: { type: String, required: true },
	number: { type: String, required: true },
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	department: String,
	credits: Number,
	description: String,
}, { collection: "courses" });

export default courseSchema;