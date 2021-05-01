const api = require('binance');

const binanceWS = new api.BinanceWS(true);

binanceWS.onDepthUpdate('BTCUSD', data => {
    console.log(data);
});
