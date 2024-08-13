import * as dao from "./dao.js";

export default function ModuleRoutes(app) {

	// Update a module by ID
	app.put("/api/modules/:mid", async (req, res) => {
		const { mid } = req.params;
		try {
			const updatedModule = await dao.updateModule(mid, req.body);
			if (updatedModule.nModified > 0) {
				res.sendStatus(204);
			} else {
				res.sendStatus(404);
			}
		} catch (error) {
			res.status(500).json({ error: "Failed to update module" });
		}
	});

	// Delete a module by ID
	app.delete("/api/modules/:mid", async (req, res) => {
		const { mid } = req.params;
		try {
			const deletedModule = await dao.deleteModule(mid);
			if (deletedModule.deletedCount > 0) {
				res.sendStatus(200);
			} else {
				res.sendStatus(404);
			}
		} catch (error) {
			res.status(500).json({ error: "Failed to delete module" });
		}
	});

	// Create a new module for a specific course
	app.post("/api/courses/:cid/modules", async (req, res) => {
		const { cid } = req.params;
		const newModule = {
			...req.body,
			course: cid,
			_id: new Date().getTime().toString(),
		};
		try {
			const createdModule = await dao.createModule(newModule);
			res.json(createdModule);
		} catch (error) {
			res.status(500).json({ error: "Failed to create module" });
		}
	});

	// Retrieve all modules for a specific course
	app.get("/api/courses/:cid/modules", async (req, res) => {
		const { cid } = req.params;
		try {
			const modules = await dao.findModulesByCourse(cid);
			res.json(modules);
		} catch (error) {
			res.status(500).json({ error: "Failed to fetch modules" });
		}
	});

}
