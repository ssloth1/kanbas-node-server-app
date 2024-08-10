// kanbas-node-server-app/Kanbas/Users/dao.js
import model from "./model.js";

export const createUser = (user) => { };

export const findUsersByPartialName = (partialName) => {
	const regex = new RegExp(partialName, "i");
	return model.find({
		$or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
	});
};


export const findAllUsers = () => model.find();
export const findUsersByRole = (role) => model.find({ role: role });
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) => model.findOne({ username: username });
export const findUserByCredentials = (username, password) => model.findOne({ username, password });

export const updateUser = async (userId, user) => {
	try {
		const result = await model.updateOne({ _id: userId }, { $set: user });
		console.log("Update result:", result);
		return result;
	} catch (error) {
		console.error("Error updating user:", error);
		throw error;
	}
};

export const deleteUser = (userId) => model.deleteOne({ _id: userId });
