import WebSocket, { WebSocketServer } from "ws";
export class Zerver {
    host: string;
    port: number;
    ws: WebSocketServer;

    constructor(host: string, port: number) {
        this.host = host;
        this.port = port;
        this.ws = new WebSocket.Server({
            port: this.port,
            host: this.host,
        });
    }

    public zerverSend(msg: string): void {
        this.ws.clients.forEach(client => client.send(msg));
    }
}


