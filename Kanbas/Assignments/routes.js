// kanbas-node-server/Kanbas/Assignments/routes.js
//test
import db from "../Database/index.js";

export default function AssignmentRoutes(app) {
	// Retrieve assignments for a specific course
	app.get("/api/courses/:cid/assignments", (req, res) => {
		const { cid } = req.params;
		const assignments = db.assignments.filter((a) => a.course === cid);
		res.json(assignments);
	});

	// Create a new assignment for a specific course
	app.post("/api/courses/:cid/assignments", (req, res) => {
		const { cid } = req.params;
		const newAssignment = {
			...req.body,
			course: cid,
			_id: new Date().getTime().toString(),
		};
		db.assignments.push(newAssignment);
		res.send(newAssignment);
	});

	// Update an assignment by ID
	app.put("/api/assignments/:aid", (req, res) => {
		const { aid } = req.params;
		const assignmentIndex = db.assignments.findIndex((a) => a._id === aid);
		if (assignmentIndex !== -1) {
			db.assignments[assignmentIndex] = {
				...db.assignments[assignmentIndex],
				...req.body,
			};
			res.sendStatus(204);
		} else {
			res.sendStatus(404);
		}
	});

	// Delete an assignment by ID
	app.delete("/api/assignments/:aid", (req, res) => {
		const { aid } = req.params;
		db.assignments = db.assignments.filter((a) => a._id !== aid);
		res.sendStatus(200);
	});
}
