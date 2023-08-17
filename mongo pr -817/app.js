const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3000;
const dbUrl = process.env.DB_URL || 'mongodb://0.0.0.0:27017/fruitDB';

const fruitsSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const sampleFruitData = {
    name: "Apple",
    rating: 3,
    review: "Good"
};

async function connectToDatabase() {
    try {
        await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit the process on database connection error
    }
}

(async () => {
    await connectToDatabase();

    try {
        const sampleFruit = new Fruit(sampleFruitData);
        await sampleFruit.save();
        console.log('Sample fruit data saved');
    } catch (error) {
        console.error('Error saving sample fruit data:', error);
    }

    app.get('/', (req, res) => {
        res.send("Hello");
    });

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
})();
