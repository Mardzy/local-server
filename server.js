var Axios = require('axios');
var express = require('express');
var socket = require('socket.io');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// (function () {
//     Axios.get('http://localhost:3000', {params: {arg01: 'nothing'}})
//         .then(function(result) {
//             console.log('then ==>', result);
//         })
//         .catch(function(error) {
//             console.log('catch ==>', error);
//         });
// }());

var server = app.listen(3000, function() {
    console.log('listening to port 3000');
});

var io = socket(server);

io.on('connection', function(websocket) {
    console.log('made socket connection', websocket);
});
