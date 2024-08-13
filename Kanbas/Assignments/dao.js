import AssignmentModel from "./model.js";

export const createAssignment = (assignment) => {
	return AssignmentModel.create(assignment);
};

export const findAssignmentsByCourse = (courseId) => {
	return AssignmentModel.find({ course: courseId });
};

export const findAssignmentById = (assignmentId) => {
	return AssignmentModel.findById(assignmentId);
};

export const updateAssignment = (assignmentId, assignment) => {
	return AssignmentModel.updateOne({ _id: assignmentId }, { $set: assignment });
};

export const deleteAssignment = (assignmentId) => {
	return AssignmentModel.deleteOne({ _id: assignmentId });
};
