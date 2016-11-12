var express = require('express');
var path = require('path');

var app = express();

var compression = require('compression');
// must be first!
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

// ...
app.get('*', function (req, res) {
    // and drop 'public' in the middle of here
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});
var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
});
//NODE_ENV=production npm start