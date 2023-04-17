const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const secret = '312rdsfsdf233r4sfddsfs'

const tokenBlacklist = new Set();

async function register(email, location, tel, password) {
    const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (existing) {
        throw new Error("Email is taken!")
    }
    const user = await User.create({
        email,
        location,
        tel,
        hashedPassword: await bcrypt.hash(password, 10),
    });
    return createToken(user)

}

async function getUserData(id) {
    return User.findById(id);
}

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (!user) {
        throw new Error("Incorrect email or password!")
    }

    const match = await bcrypt.compare(password, user.hashedPassword);
    if (!match) {
        throw new Error("Incorrect email or password!")
    }
    return createToken(user)

}


async function logout(token) {
    tokenBlacklist.add(token);
}

function createToken(user) {

    payload = {
        _id: user._id,
        email: user.email
    }
    return {
        _id: user._id,
        email: user.email,
        accessToken: jwt.sign(payload, secret)
    }
}

function parseToken(token) {
    // if(blackList.has(token)){
    //     throw new Error('Token is blacklisted');
    // }
    //  return jwt.verify(token, secret);
    try {
        return jwt.verify(token, secret)
    } catch (err) {
        throw new Error('Invalid accessToken')
    }
}

module.exports = {
    register, login, logout,
    parseToken, getUserData
}