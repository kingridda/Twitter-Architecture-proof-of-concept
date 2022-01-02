require('dotenv').config()
var authAPI = require('express').Router();
var authService = require('./services/authService');



authAPI.get('/', function(req, res) {
    res.send('AuthAPI... ')
})
authAPI.post('/', function(req, res) {
    const token = authService.generateAccessToken({ username: process.env.USER_NAME, userId: process.env.USER_ID });
    res.json(token);
})

module.exports = authAPI;