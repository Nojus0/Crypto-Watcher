import WebSocket from "ws"
import { CLIENT_SUBSCRIBE, Crypto, COIN_TYPE, CURRENCY_USD } from "./message"
const connection = new WebSocket("wss://stream.coinmarketcap.com/price/latest");

connection.onmessage = ({ data }) => {
    const COIN = new Crypto(JSON.parse(data));
}

connection.onopen = () => {
    console.log("Connected to server.");
    CLIENT_SUBSCRIBE.send(connection, [COIN_TYPE.BTC, COIN_TYPE.ETH]);
}

connection.onerror = err => {
    console.log(`Error occured: ${err}`);
}