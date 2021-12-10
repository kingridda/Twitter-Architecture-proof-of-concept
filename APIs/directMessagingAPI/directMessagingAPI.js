var directMessagingAPI = require('express').Router()


directMessagingAPI.get('/', function(req, res) {
    res.send('directMessagingAPI... ')
})


module.exports = directMessagingAPI;