export const CLIENT_SUBSCRIBE = {
    method: "subscribe",
    id: "price",
    data: { cryptoIds: [1] },
    send(connection, COINS) {
        this.data.cryptoIds = COINS;
        connection.send(JSON.stringify(this));
    }
}

export class Crypto {
    constructor(obj) {
        this.TYPE = obj.d.cr.id;
        this.price = obj.d.cr.p;
        this.LastHour = obj.d.cr.p1h;
        this.Lat24Hours = obj.d.cr.p24h;
        this.Last7Days = obj.d.cr.p7d;
        this.mc = obj.d.cr.mc;
        this.volume = obj.d.cr.v;
        this.time = new Date(obj.d.t);
    }
}

export const COIN_TYPE = {
    BTC: 1,
    ETH: 1027,
    BCH: 1831,
    XRP: 52,
    LTC: 2,
    XMR: 328,
    DOGE: 74,
    ZEC: 1437
}

export const CURRENCY_USD = {
    EUR: 0.83,
    GBP: 0.74
}