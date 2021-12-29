const express = require('express')
const app = express()
const port = 3000

var mediaDownloadAPI = require('./APIs/mediaDownloadAPI/mediaDownloadAPI');
var mediaUploadAPI = require('./APIs/mediaUploadAPI/mediaUploadAPI');
var tweetAPI = require('./APIs/tweetAPI/tweetAPI');
var searchAPI = require('./APIs/searchAPI/searchAPI');
var userTimeLineAPI = require('./APIs/userTimeLineAPI/userTimeLineAPI');
var homeTimeLineAPI = require('./APIs/homeTimeLineAPI/homeTimeLineAPI');
var hashtagTimeLineAPI = require('./APIs/hashtagTimeLineAPI/hashtagTimeLineAPI');
var directMessagingAPI = require('./APIs/directMessagingAPI/directMessagingAPI');
var socialGraphAPI = require('./APIs/socialGraphAPI/socialGraphAPI');
var userAPI = require('./APIs/userAPI/userAPI');



app.use('/', homeTimeLineAPI);
app.use('/media', mediaDownloadAPI);
app.use('/upload', mediaUploadAPI);
app.use('/tweet', tweetAPI);
app.use('/search', searchAPI);
app.use('/user', userTimeLineAPI);
app.use('/home', homeTimeLineAPI);
app.use('/hashtag', hashtagTimeLineAPI);
app.use('/direct', directMessagingAPI);
app.use('/social', socialGraphAPI);
app.use('/profile', userAPI);


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