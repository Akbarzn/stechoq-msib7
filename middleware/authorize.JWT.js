const jwt = require('jsonwebtoken');

const authorizeJWT = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Token not found" });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decode.userId; // Ensure userId is correctly assigned
        next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({ message: "Invalid token or userId not found" });
    }
};

module.exports = authorizeJWT;
