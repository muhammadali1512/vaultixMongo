import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

dotenv.config();

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = "vaultix";

const app = express();

app.use(bodyParser.json());
app.use(cors());

let db;

const connectDB = async () => {
    if (!db) {
        await client.connect();
        db = client.db(dbName);
        console.log("Connected to MongoDB Atlas");
    }

    return db;
};

// Get all passwords
app.get('/', async (req, res) => {
    try {
        const database = await connectDB();
        const collection = database.collection('passwords');

        const findResult = await collection.find({}).toArray();

        res.send(findResult);
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        });
    }
});

// Save a password
app.post('/', async (req, res) => {
    try {
        const database = await connectDB();
        const collection = database.collection('passwords');

        const result = await collection.insertOne(req.body);

        res.send({
            success: true,
            result: result
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        });
    }
});

// Delete a password
app.delete('/', async (req, res) => {
    try {
        const database = await connectDB();
        const collection = database.collection('passwords');

        const result = await collection.deleteOne(req.body);

        res.send({
            success: true,
            result: result
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        });
    }
});

export default app;