var tweetAPI = require('express').Router()


tweetAPI.get('/', function(req, res) {
    res.send('tweetAPI... ')
})


module.exports = tweetAPI;