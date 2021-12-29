var authAPI = require('express').Router();
var authService = require('./services/authService');



authAPI.get('/auth', function(req, res) {
    res.send('AuthAPI... ')
})
authAPI.post('/auth', function(req, res) {
    const token = authService.generateAccessToken({ username: "req.body.username" });
    res.json(token);
})

module.exports = authAPI;