
export default function WorkingWithObjects(app) {
	const assignment = {
		id: 1, title: "NodeJS Assignment",
		description: "Create a NodeJS server with ExpressJS",
		due: "2021-10-10", completed: false, score: 0,
	};

	const module = {
		id: 1, name: "Implementing Node Web Server APIs",
		description: "Learn how to implement Node Web Server APIs",
		course: "CS5610: Web Development",
	}

	// get assignment
	app.get("/lab5/assignment", (req, res) => {
		console.log("Assignment:", assignment);
		res.json(assignment);
	});
	// get assignment title
	app.get("/lab5/assignment/title", (req, res) => {
		console.log("Assignment Title:", assignment.title);
		res.json(assignment.title);
	});
	// update assignment title
	app.get("/lab5/assignment/title/:newTitle", (req, res) => {
		const { newTitle } = req.params;
		assignment.title = newTitle;
		res.json(assignment);
	});

	// update assignment score
	app.get("/lab5/assignment/score/:newScore", (req, res) => {
		const { newScore } = req.params;
		assignment.score = newScore;
		res.json(assignment);
	});

	// update assignment completed
	app.get("/lab5/assignment/completed/:isCompleted", (req, res) => {
		const { isCompleted } = req.params;
		assignment.completed = isCompleted === "true";
		res.json(assignment);
	});

	// get module
	app.get("/lab5/module", (req, res) => {
		console.log("Module:", module);
		res.json(module);
	});
	// get module name
	app.get("/lab5/module/name", (req, res) => {
		console.log("Module Name:", module.name);
		res.json(module.name);
	});
	// update module name
	app.get("/lab5/module/name/:newName", (req, res) => {
		const { newName } = req.params;
		module.name = newName;
		res.json(module);
	});


};
