const { register, logout, getUserData, login } = require('../services/userService');
const { body, validationResult } = require('express-validator');
const { parseError } = require('../util/parser');
const { hasUser } = require('../middlewares/guards');
const authController = require('express').Router();


authController.post('/register',
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long!'),
    body('location').isLength({ min: 3 }).withMessage('Location must be at least 3 characters long!'),
    body('tel').isLength({ min: 10 }).withMessage('Phone number must be at least 10 characters long!'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }
            const token = await register(req.body.email, req.body.location, req.body.tel,req.body.password);
            res.json({ token });

        } catch (err) {

            const message = parseError(err)
            res.status(400).json({ message })
        }
    });

authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password);
        res.json({ token });
    } catch (err) {
        const message = parseError(err)


        res.status(401).json({ message })
    }
});

authController.get('/profile', hasUser(), async (req, res) => {
    console.log(req.user)
    const userData = await getUserData(req.user._id);
    res.json(userData);
})

// authController.get('/userProfile', async (req, res) => {
//     console.log(req.body)
//     const userData = await getUserData(req.body._id);
//     res.json(userData);
// })

authController.get('/logout', async (req, res) => {
    const token = req.token;

    await logout(token);
    res.status(204).end();
})

module.exports = authController