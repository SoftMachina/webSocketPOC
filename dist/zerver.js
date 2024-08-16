import WebSocket from "ws";
export class Zerver {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.ws = new WebSocket.Server({
            port: this.port,
            host: this.host,
        });
    }
    zerverSend(msg) {
        this.ws.clients.forEach(client => client.send(msg));
    }
}
//# sourceMappingURL=zerver.js.map