var mediaUploadAPI = require('express').Router()
var mediaUploadService = require('./services/mediaUploadService')


mediaUploadAPI.post('/', mediaUploadService.upload);

module.exports = mediaUploadAPI;