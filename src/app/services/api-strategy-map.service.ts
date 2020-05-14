import { Injectable } from '@angular/core';

import * as Excel from "exceljs";
@Injectable({
  providedIn: 'root'
})
export class ApiStrategyMapService {

  constructor() { }

  processStrategyDinh(urlMap: string, ws: Excel.Worksheet, config: any) {
    return new Promise(async (resolve, reject) => {
      try {

        let row = ws.getRow(2);

        row.getCell(config.id.value).value = 2;
        row.getCell(config.name.value).value = 'Lê Thị Hoa';

        resolve({ status: "OK", count: 1 })
      } catch (e) {
        console.log(e);
        reject({ status: "NOK", error: e })
      }
    })

  }
}
