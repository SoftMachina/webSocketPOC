import { WebSocketServer } from "ws";
export class Zerver {
    host: string;
    port: number;
    ws: WebSocketServer;

    constructor(host: string, port: number) {
        this.host = host;
        this.port = port;
        this.ws = new WebSocketServer({
            port: this.port,
            host: this.host,
        });
    }

    public zerverSend(msg: MessageEvent): void {
        console.log("sending to clients: ", msg);
        this.ws.clients.forEach(client => client.send(msg.data));
    }
}


