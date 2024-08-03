export default function Hello(app) {
	app.get('/hello', (req, res) => {
		res.send('Life is good!')
		console.log('Request received')
	})
	app.get('/', (req, res) => {
		res.send('Welcome to Full Stack Development!')
		console.log('Request received')
	})
}

