var mediaDownloadAPI = require('express').Router()
var mediaDownloadService = require('./services/mediaDownloadService')


mediaDownloadAPI.get('/', mediaDownloadService.download);


module.exports = mediaDownloadAPI;