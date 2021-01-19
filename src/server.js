import WebSocket from "ws"
import { CLIENT_SUBSCRIBE, Crypto, COIN_TYPE, CURRENCY_USD } from "./message"
const connection = new WebSocket("wss://stream.coinmarketcap.com/price/latest");

connection.onmessage = ({ data }) => {
    const COIN = new Crypto(JSON.parse(data));
    if(COIN.TYPE === COIN_TYPE.BTC)
    {
        console.log(`BTC PRICE: ${COIN.price}, LAST HOUR: ${COIN.LastHour} LAST 24 HOURS: ${COIN.Lat24Hours}, LAST 7 DAYS: ${COIN.Last7Days}, VOLUME: ${COIN.volume}`);
    }
}

connection.onopen = () => {
    console.log("Connected to coinmarketcap.com server.");
    CLIENT_SUBSCRIBE.send(connection, [COIN_TYPE.BTC]);
}

connection.onerror = err => {
    console.log(`Error occured: ${err}`);
}