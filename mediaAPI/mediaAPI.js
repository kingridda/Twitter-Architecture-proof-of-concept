var mediaAPI = require('express').Router()


mediaAPI.get('/', function(req, res) {
    res.send('getting media (image, video...)')
})


module.exports = mediaAPI;