import { Klient } from "./klient";
import { Zerver } from "./zerver";

const zerver = new Zerver('localhost', 8080);

const klient = new Klient('ws://localhost:8080');

zerver.zerverSend('test');
