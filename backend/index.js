import express, { request } from "express";
import {PORT, MONGO_URI} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import bookRouter from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.use("/books", bookRouter);

mongoose
    .connect(MONGO_URI)
    .then(
        () => console.log("Connected to MongoDB"),
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    )
    .catch((error) => {
        console.log(error);
    });