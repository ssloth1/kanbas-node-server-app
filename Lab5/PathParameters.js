export default function PathParameters(app) {



	app.get("/lab5/add/:a/:b", (req, res) => {
		const { a, b } = req.params;
		const sum = parseInt(a) + parseInt(b);
		res.send(sum.toString());
		console.log("Path Parameters, Adding:", a + "+" + b + "=" + sum);
	});
	app.get("/lab5/subtract/:a/:b", (req, res) => {
		const { a, b } = req.params;
		const sum = parseInt(a) - parseInt(b);
		res.send(sum.toString());
		console.log("Path Parameters, Subtract:", a + "-" + b + "=" + sum);
	});
	app.get("/lab5/multiply/:a/:b", (req, res) => {
		const { a, b } = req.params;
		const sum = parseInt(a) * parseInt(b);
		res.send(sum.toString());
		console.log("Path Parameters, Multiply:", a + "*" + b + "=" + sum);

	});
	app.get("/lab5/divide/:a/:b", (req, res) => {
		const { a, b } = req.params;
		const sum = parseInt(a) / parseInt(b);
		res.send(sum.toString());
		console.log("Path Parameters, Divide:", a + "/" + b + "=" + sum);
	});
};
