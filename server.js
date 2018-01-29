var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// handle http request from client side


app.post('/', function (req, res) {
    // the "req" parameter is an object that gives you access to data in the
    // request.
    console.log('res ====>', res);
    console.log('req ====>', req);
    var body = req.body;

    console.log('BODY ====>', body);

    // the "res" parameter lets you manipulate the response.
    res.end(body.param1);

});


// var server = 
app.listen(3000, function() {
    console.log('listening to port 3000');
});
