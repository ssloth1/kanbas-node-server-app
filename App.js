import "dotenv/config";
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'



import Hello from "./Hello.js"
import Lab5 from './Lab5/index.js'
import CourseRoutes from './Kanbas/Courses/routes.js'
import ModuleRoutes from './Kanbas/Modules/routes.js'
import AssignmentRoutes from './Kanbas/Assignments/routes.js'
import UserRoutes from './Kanbas/Users/routes.js'


const app = express();
app.use(cors());
app.use(express.json()); // Work should start below this line

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);

Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000, () => {
	console.log('Server is running on port 4000')
})