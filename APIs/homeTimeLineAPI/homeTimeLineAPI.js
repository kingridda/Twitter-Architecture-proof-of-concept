var homeTimeLine = require('express').Router()


homeTimeLine.get('/', function(req, res) {
    res.send('homeTimeLine... ')
})


module.exports = homeTimeLine;