export class Klient {
    ws: WebSocket;

    constructor(con: string) {
        this.ws = new WebSocket(con);
    }

    klientReceive(): void {
        this.ws.onmessage = (msg) => console.log('klient receives: ', msg);
    }
}
