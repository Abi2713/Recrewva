require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using the MONGODB_URI from .env
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log(err));

// Define a basic route
app.get('/', (req, res) => {
    res.send('Backend server is running');
});

// Use routes (e.g., form routes)
const formRoutes = require('./routes/forms');
app.use('/api/forms', formRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
