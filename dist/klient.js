var ws;
export const connect = (connection) => ws = new WebSocket(connection);
ws.onmessage = (data) => {
    console.log('a message received');
    console.log(data);
    ws.close();
};
//# sourceMappingURL=klient.js.map