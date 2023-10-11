import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import hotelRoutes from './src/Routes/hotel.js';
import userRoutes from './src/Routes/user.js';
import tableRoutes from './src/Routes/table.js';

 

const app = express();
dotenv.config();

app.use(express.json());
app.use(bodyParser.json({limit: "50mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use('/hotels', hotelRoutes);
app.use('/auth', userRoutes);
app.use('/table',tableRoutes);
// app.use(session)

const url = "mongodb+srv://saksham2003jain:saksham.jain21b@cluster0.dwhxtlv.mongodb.net/";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT || 5000, function () {
            console.log('Server is running on port:', process.env.PORT || 5000);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });