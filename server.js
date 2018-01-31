// var net = require('net');
// var textChunk = '';
var port = 4555;
// var server = net.createServer(function (socket) {
//     socket.write('Echo server\r\n');
//     socket.on('data', function (data) {
//         console.log(data);
//         textChunk = data.toString('utf8');
//         console.log(textChunk);
//         socket.write(textChunk);
//     });
//     socket.on('error', function(err) {
//         console.log(err);
//     });
//     socket.on('end', function() {
//         console.log('client disconnected');
//     });
// });
// server.listen(port, '127.0.0.1', function() {
//     console.log('Server listening on port', port);
// });

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port });

let clientCount = 0;

wss.on('connection', (ws) => {
    clientCount += 1;
    console.log('on connection', clientCount);
    ws.on('message', (msg) => {
        console.log('received: %s', msg);
        if (msg === 'handshake-test') {
            try {
                console.log('send: handshake-success');
                ws.send('handshake-success');
            }
            catch(err) {
                console.log('Error caught', err);
            }
        }
    });
    ws.on('close', () => {
        console.log('closed');
    });
    ws.on('error', (err) => {
        console.log('error:', err);
    });

    // ws.send('something');

});
console.log('Websocket server listening on', port);
