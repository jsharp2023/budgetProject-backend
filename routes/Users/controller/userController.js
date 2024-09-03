const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/User');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
   
    try {
        console.log('Register endpoint hit');
        console.log('Received data:', req.body);
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user instance
        user = new User({
            name,
            email,
            password
        });

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save the user to the database
        await user.save();

        // Generate JWT
        const payload = {
            id: user._id,
            name: user.name
        };

        const token = jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' });

        // Send the token and user name back to the client
        res.status(201).json({ token, name: user.name });

    } catch (error) {
        console.error('Error during registration:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found');
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Password does not match');
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT
        const payload = {
            id: user._id,
            name: user.name
        };

        const token = jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' });

        // Send the token and user name back to the client
        console.log('Login successful');
        res.status(200).json({ token, name: user.name });

    } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports = { registerUser, loginUser };
