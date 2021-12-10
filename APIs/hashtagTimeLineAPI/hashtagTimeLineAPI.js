var hashtagTimeLine = require('express').Router()


hashtagTimeLine.get('/', function(req, res) {
    res.send('hashtagTimeLine... ')
})


module.exports = hashtagTimeLine;