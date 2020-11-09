import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'
const app = express();

app.use('/posts', postRoutes);
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/memories"
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(app.listen(PORT, () => {
        console.log(`Server Running On Port:${PORT}`)
    }))
    .catch();


