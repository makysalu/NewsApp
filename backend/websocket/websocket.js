const WebSocket = require('ws');
const { WebSocketServer } = WebSocket;

const ws = new WebSocketServer({ port: 8080 });

ws.on('connection', (ws) => {
    ws.on('message', (data) => {
        console.log(data);
    });
})

exports.sendResult = (data) => {
    ws.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
};