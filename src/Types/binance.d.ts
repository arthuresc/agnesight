declare module 'binance-api' {
  export interface BinanceMarketNotices {
    code: string;
    message: string | null;
    messageDetail: string | null;
    data: BinanceMarketNoticesData[];
    total: number;
    success: boolean;
  }

  export interface BinanceMarketNoticesData {
    "id": number;
    "title": string;
    "url": string;
    "time": number;
    "lang": string;
    "isTop": boolean;
    "isEmergency": boolean;
    "detail": string;
    "textOnlyBody": string
    "footer": {
      "id": number;
      "parentId": number;
      "lang": string;
      "type": string;
      "createUser": null;
      "updateUser": null;
      "dbCreateTime": number
      "dbModifyTime": number
      "title": string;
      "content": string;
      "contentJson": string;
      "textOnly": string;
      "deleted": number;
      "footStatus": number;
      "useCount": number;
    };
    "type": string;
    "picUrl": string | null;
    "pair": string | null;
    "endTime": number | null;
    "code": string;
  }
}
