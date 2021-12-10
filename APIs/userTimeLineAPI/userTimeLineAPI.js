var userTimeLineAPI = require('express').Router()


userTimeLineAPI.get('/', function(req, res) {
    res.send('userTimeLineAPI... ')
})


module.exports = userTimeLineAPI;