const get = (pageSize:number = 16, pageNo:number = 1) => `https://www.binance.com/bapi/composite/v1/public/cms/article/catalog/list/query?catalogId=48&pageNo=${pageNo}&pageSize=${pageSize}`; 

export {get};