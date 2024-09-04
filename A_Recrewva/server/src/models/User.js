const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Optional: Log when a user is saved
userSchema.pre('save', function (next) {
    if (this.isNew) {
        console.log('New user being created:', this);
    }
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
