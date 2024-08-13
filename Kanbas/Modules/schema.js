import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
	_id: { type: String, required: true },
	name: { type: String, required: true },
	description: String,
	course: { type: String, required: true, ref: "CourseModel" },
	lessons: [{ _id: String, name: String, description: String }],
}, { collection: "modules" });

export default moduleSchema;
