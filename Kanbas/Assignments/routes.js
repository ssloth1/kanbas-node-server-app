import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
	// Retrieve assignments for a specific course
	app.get("/api/courses/:cid/assignments", async (req, res) => {
		const { cid } = req.params;
		try {
			const assignments = await dao.findAssignmentsByCourse(cid);
			res.json(assignments);
		} catch (error) {
			res.status(500).json({ error: "Failed to fetch assignments" });
		}
	});

	// Create a new assignment for a specific course
	app.post("/api/courses/:cid/assignments", async (req, res) => {
		const { cid } = req.params;
		const newAssignment = {
			...req.body,
			course: cid,
			_id: new Date().getTime().toString(),
		};
		try {
			const createdAssignment = await dao.createAssignment(newAssignment);
			res.json(createdAssignment);
		} catch (error) {
			res.status(500).json({ error: "Failed to create assignment" });
		}
	});

	// Update an assignment by ID
	app.put("/api/assignments/:aid", async (req, res) => {
		const { aid } = req.params;
		try {
			const updatedAssignment = await dao.updateAssignment(aid, req.body);
			if (updatedAssignment.nModified > 0) {
				res.sendStatus(204);
			} else {
				res.sendStatus(404);
			}
		} catch (error) {
			res.status(500).json({ error: "Failed to update assignment" });
		}
	});

	// Delete an assignment by ID
	app.delete("/api/assignments/:aid", async (req, res) => {
		const { aid } = req.params;
		try {
			const deletedAssignment = await dao.deleteAssignment(aid);
			if (deletedAssignment.deletedCount > 0) {
				res.sendStatus(200);
			} else {
				res.sendStatus(404);
			}
		} catch (error) {
			res.status(500).json({ error: "Failed to delete assignment" });
		}
	});
}
