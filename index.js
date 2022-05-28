import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import router from './Router.js';
import cors from 'cors';
const app = express()
const PORT = 5001

app.use(express.json({ extended: true }));
app.use(cors({
	origin: 'http://localhost:3000'
}))
``
app.use('/api', router);

const startApp = async() => {
	try {
		await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
		app.listen(PORT, () => { console.log(`Example app listening on port ${PORT}`) });
	} catch (e) {
		console.log(e)
	}
}

startApp();