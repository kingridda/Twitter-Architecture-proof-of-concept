var searchAPI = require('express').Router()


searchAPI.get('/', function(req, res) {
    res.send('search... ')
})


module.exports = searchAPI;