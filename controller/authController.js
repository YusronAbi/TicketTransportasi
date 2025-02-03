const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.login = (req, res) => {
    const { username, password } = req.body;

    if (username === 'user' && password === 'password') {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ success: true, token });
    }

    return res.status(401).json({ success: false, message: 'Invalid credentials' });
};