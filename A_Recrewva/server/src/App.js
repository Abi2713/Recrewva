const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const categoriesRouter = require('./routes/categories'); // Import the categories router

const app = express();

// Connect to the database
connectDB();

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Middleware to parse JSON requests
app.use(express.json());

// Use the user routes for handling authentication
app.use('/api', userRoutes); // Correctly set up prefix to '/api'

// Use the categories routes
app.use('/api/categories', categoriesRouter); // Add this line to use the categories routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
