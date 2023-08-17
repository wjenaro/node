const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3000;
const DB_URL = process.env.DB_URL || 'mongodb://0.0.0.0:27017/People';

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const People = mongoose.model("People", peopleSchema);

const samplePersonData = {
    name: "John Terry",
    age: 83
};

async function connectDB() {
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }
}

(async () => {
    await connectDB();
    
    try {
        const samplePerson = new People(samplePersonData);
        //await samplePerson.save(); // Saving the sample data
        console.log("Sample person data saved");
    } catch (error) {
        console.error("Error saving sample person data:", error);
    }

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
})();

// Moved this part inside the IIFE to ensure it's executed after server setup
(async () => {
    try {
        const people = await People.find();
        console.log("People retrieved from the database:", people);
    } catch (error) {
        console.error("Error fetching people data:", error);
    }
})();
