var ws: WebSocket;

export const connect = (connection: string) => ws = new WebSocket(connection);

ws.onmessage = (data) => {
    console.log('a message received');
    console.log(data);
    ws.close();
};
