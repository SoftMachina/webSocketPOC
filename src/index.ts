import { connect } from "./klient.js";
import { Zerver } from "./zerver.js";

const zerver = new Zerver('localhost', 8080);

const klient = connect('ws://localhost:8080');
const msg: MessageEvent<string> = new MessageEvent("msg");
zerver.zerverSend(msg);

