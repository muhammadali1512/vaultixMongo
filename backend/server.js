import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import { MongoClient } from 'mongodb';
dotenv.config();
import bodyParser from 'body-parser';

// Connection Url
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

// Datbase Name
const dbName = "vaultix"
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());
// Connects your Express backend to MongoDB and then reads data from a MongoDB collection
client.connect()
    .then(() => {
        console.log("Connected to MongoDB Atlas");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

// Get all the Passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.send(findResult);
});

// Save a Password
app.post('/', async (req, res) => {
    const password = (req.body);
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({ success: true, result: findResult })
});

// Delete a Password
app.delete('/', async (req, res) => {
    const password = (req.body);
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
    res.send({ success: true, result: findResult });
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);

});