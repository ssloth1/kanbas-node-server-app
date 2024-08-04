export default function QueryParameters(app) {
	app.get("/lab5/calculator", (req, res) => {
		const { a, b, operation } = req.query;
		let result = 0;
		switch (operation) {
			case "add":
				result = parseInt(a) + parseInt(b);
				console.log("Query Parameters, Adding:", a + "+" + b + "=" + result);
				break;
			case "subtract":
				result = parseInt(a) - parseInt(b);
				console.log("Query Parameters, Subtract:", a + "-" + b + "=" + result);
				break;
			case "multiply":
				result = parseInt(a) * parseInt(b);
				console.log("Query Parameters, Multiply:", a + "*" + b + "=" + result);
				break;
			case "divide":
				result = parseInt(a) / parseInt(b);
				console.log("Query Parameters, Divide:", a + "/" + b + "=" + result);
				break;
		}
		res.send(result.toString());
	});
}