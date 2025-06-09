// https://www.binance.com/bapi/composite/v1/public/cms/article/catalog/list/query?catalogId=48&pageNo=1&pageSize=16
// https://www.binance.com/bapi/composite/v1/public/cms/article/catalog/list/query?catalogId=48&pageNo=1&pageSize=${rows}
// https://www.binance.com/bapi/composite/v1/public/promo/cmc/cryptocurrency/listings/new?limit=100&start=1

// const get = (page:number = 16, rows:number = 1) => `https://www.binance.com/bapi/composite/v1/public/market/notice/get?page=${page}&rows=${rows}`; 
const get = (limit:number = 16, start:number = 1) => `https://www.binance.com/bapi/composite/v1/public/promo/cmc/cryptocurrency/listings/new?limit=${limit}&start=${start}`; 

export {get};