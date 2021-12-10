var mediaDownloadAPI = require('express').Router()


mediaDownloadAPI.get('/', function(req, res) {
    res.send('getting media (image, video...)')
});


module.exports = mediaDownloadAPI;