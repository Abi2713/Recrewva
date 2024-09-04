const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Define recruiter credentials (use environment variables for security)
const RECRUITER_EMAIL = 'recruiter@example.com'; // Replace with actual recruiter email
const RECRUITER_PASSWORD = 'password'; // Replace with actual recruiter password

// Sign-up function
const signUp = async (req, res) => {
    try {
        const { email, password, username } = req.body;

        if (!email || !password || !username) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword, username });
        await newUser.save();

        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(201).json({ success: true, token, username: newUser.username, role: 'candidate' });
    } catch (err) {
        console.error('Error in signUp:', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Login function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required' });
        }

        // Check if the user is a recruiter
        if (email === RECRUITER_EMAIL && password === RECRUITER_PASSWORD) {
            const token = jwt.sign(
                { id: 'recruiter' }, // A dummy ID for the recruiter
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            return res.json({ success: true, token, username: 'Recruiter', role: 'recruiter' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ success: true, token, username: user.username, role: 'candidate' });
    } catch (err) {
        console.error('Error in login:', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = { signUp, login };
