import ModuleModel from "./model.js";

export const createModule = (module) => {
	return ModuleModel.create(module);
};

export const findModulesByCourse = (courseId) => {
	return ModuleModel.find({ course: courseId });
};

export const findModuleById = (moduleId) => {
	return ModuleModel.findById(moduleId);
};

export const updateModule = (moduleId, module) => {
	return ModuleModel.updateOne({ _id: moduleId }, { $set: module });
};

export const deleteModule = (moduleId) => {
	return ModuleModel.deleteOne({ _id: moduleId });
};
