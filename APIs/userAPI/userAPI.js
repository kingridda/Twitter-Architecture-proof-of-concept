var userAPI = require('express').Router()


userAPI.get('/', function(req, res) {
    res.send('userAPI... ')
})


module.exports = userAPI;