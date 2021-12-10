const express = require('express')
const app = express()
const port = 3000

var mediaAPI = require('./mediaAPI/mediaAPI');
var mediaAPI = require('./mediaAPI/mediaAPI');
var mediaAPI = require('./mediaAPI/mediaAPI');
var mediaAPI = require('./mediaAPI/mediaAPI');
var mediaAPI = require('./mediaAPI/mediaAPI');
var mediaAPI = require('./mediaAPI/mediaAPI');
var mediaAPI = require('./mediaAPI/mediaAPI');
var mediaAPI = require('./mediaAPI/mediaAPI');
var mediaAPI = require('./mediaAPI/mediaAPI');


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/media', mediaAPI);
app.use('/media', mediaAPI);
app.use('/media', mediaAPI);
app.use('/media', mediaAPI);
app.use('/media', mediaAPI);
app.use('/media', mediaAPI);
app.use('/media', mediaAPI);
app.use('/media', mediaAPI);
app.use('/media', mediaAPI);


//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res) {
    res.status(404).send('404');
});
// error handler
app.use(function(err, req, res, next) {
    // render the error page
    res.status(500).send('ERROR 500');
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})