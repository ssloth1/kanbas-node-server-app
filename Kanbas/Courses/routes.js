import * as dao from "./dao.js";

export default function CourseRoutes(app) {

	// Update a course by ID
	app.put("/api/courses/:id", async (req, res) => {
		const { id } = req.params;
		const course = req.body;
		try {
			const updatedCourse = await dao.updateCourse(id, course);
			if (updatedCourse.nModified > 0) {
				res.sendStatus(204);
			} else {
				res.sendStatus(404);
			}
		} catch (error) {
			res.status(500).json({ error: "Failed to update course" });
		}
	});

	// Delete a course by ID
	app.delete("/api/courses/:id", async (req, res) => {
		const { id } = req.params;
		try {
			const deletedCourse = await dao.deleteCourse(id);
			if (deletedCourse.deletedCount > 0) {
				res.sendStatus(204);
			} else {
				res.sendStatus(404);
			}
		} catch (error) {
			res.status(500).json({ error: "Failed to delete course" });
		}
	});

	// Create a new course
	app.post("/api/courses", async (req, res) => {
		const course = {
			...req.body,
			_id: new Date().getTime().toString()
		};
		try {
			const createdCourse = await dao.createCourse(course);
			res.json(createdCourse);
		} catch (error) {
			res.status(500).json({ error: "Failed to create course" });
		}
	});

	// Retrieve all courses
	app.get("/api/courses", async (req, res) => {
		try {
			const courses = await dao.findAllCourses();
			res.json(courses);
		} catch (error) {
			res.status(500).json({ error: "Failed to retrieve courses" });
		}
	});

}
