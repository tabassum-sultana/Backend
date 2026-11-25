import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Book from './models/Book.js';

dotenv.config();

const sampleBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    description: "A classic American novel set in the Jazz Age.",
    stock: 15,
    cover: "https://example.com/gatsby.jpg"
  },
  {  
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 15.99,
    description: "A young shepherd follows his dreams.",
    stock: 19,
    cover: "https://example.com/alchemist.jpg"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: 12.99,
    description: "A practical guide to building good habits.",
    stock: 14,
    cover: "https://example.com/atomic-habits.jpg"
  }
];

const seedBooks = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected");

    await Book.deleteMany({});

    await Book.insertMany(sampleBooks);

    console.log("Sample books inserted successfully");

    await mongoose.connection.close();

    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error seeding books:", error.message);
    process.exit(1);
  }
};

seedBooks();