var socialGraphAPI = require('express').Router()


socialGraphAPI.get('/', function(req, res) {
    res.send('socialGraphAPI... ')
})


module.exports = socialGraphAPI;