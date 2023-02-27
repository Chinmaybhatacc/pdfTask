import express, { json, urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

const app = express();
dotenv.config()

var corOptions = {
    origin: 'http://localhost:8080'
}

// middleware       

app.use(cors(corOptions));

app.use(json());

app.use(urlencoded({ extended: true }));

// routers
import router from './routes/pdfRoutes.js';
app.use('/pdf', router);

// testing api

app.get('/', (req, res) => {

    res.json({ message: "hello from api" });
});

// port

const PORT = process.env.PORT || 8080;

// server

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})