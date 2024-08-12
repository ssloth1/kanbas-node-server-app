import "dotenv/config";
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import session from "express-session";

import Hello from "./Hello.js";
import Lab5 from './Lab5/index.js';
import CourseRoutes from './Kanbas/Courses/routes.js';
import ModuleRoutes from './Kanbas/Modules/routes.js';
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import UserRoutes from './Kanbas/Users/routes.js';

const app = express();

// Simple logging middleware
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
});

app.use(
	cors({
		credentials: true,
		origin: process.env.NETLIFY_URL || "http://localhost:3000",
	})
);

const sessionOptions = {
	secret: process.env.SESSION_SECRET || "kanbas",
	resave: false,
	saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
	sessionOptions.proxy = true;
	sessionOptions.cookie = {
		sameSite: "none",
		secure: true,
		domain: process.env.NODE_SERVER_DOMAIN,
	};
}
app.use(session(sessionOptions));

app.use(express.json()); // Work should start below this line

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);

Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
