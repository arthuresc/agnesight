// https://www.binance.com/bapi/composite/v1/public/cms/article/catalog/list/query?catalogId=48&pageNo=1&pageSize=16

const get = (page:number = 16, rows:number = 1) => `https://www.binance.com/bapi/composite/v1/public/market/notice/get?page=${page}&rows=${rows}`; 

export {get};