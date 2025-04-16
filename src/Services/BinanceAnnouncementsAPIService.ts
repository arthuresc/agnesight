const get = (pageSize:number = 16) => `https://www.binance.com/bapi/composite/v1/public/cms/article/catalog/list/query?catalogId=48&pageNo=1&pageSize=${pageSize}`; 

export {get};