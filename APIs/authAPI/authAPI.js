var authAPI = require('express').Router()


authAPI.get('/auth', function(req, res) {
    res.send('AuthAPI... ')
})
authAPI.post('/auth', function(req, res) {
    res.send('Token')
})

module.exports = authAPI;