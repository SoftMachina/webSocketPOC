import { Klient } from "./klient.js";
import { Zerver } from "./zerver.js";
const zerver = new Zerver('localhost', 8080);
const klient = new Klient('ws://localhost:8080');
zerver.zerverSend('test');
//# sourceMappingURL=index.js.map