const { parseToken } = require("../services/userService");

module.exports = () => (req, res, next) => {
    const token = req.headers['x-authorization'];
    console.log("BEFORE TOKEN")
    console.log(token)
    if (token) {
        try {
            const payload = parseToken(token);
            req.user = payload;
            req.token = token;
        } catch (err) {
            return res.status(401).json({ message: 'Invalid X-Authorization token' })
        }

    }
    next();
}