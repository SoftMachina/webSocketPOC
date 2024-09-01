import { WebSocketServer } from "ws";
export class Zerver {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.ws = new WebSocketServer({
            port: this.port,
            host: this.host,
        });
    }
    zerverSend(msg) {
        console.log("sending to clients: ", msg);
        this.ws.clients.forEach(client => client.send(msg.data));
    }
}
//# sourceMappingURL=zerver.js.map