export class Klient {
    constructor(con) {
        this.ws = new WebSocket(con);
    }
    klientReceive() {
        this.ws.onmessage = (msg) => console.log('klient receives: ', msg);
    }
}
//# sourceMappingURL=klient.js.map