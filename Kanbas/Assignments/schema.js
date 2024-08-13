import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
	_id: { type: String, required: true },
	title: { type: String, required: true },
	course: { type: String, required: true, ref: "CourseModel" },
}, { collection: "assignments" });

export default assignmentSchema;
