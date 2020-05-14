import { Component, OnInit } from '@angular/core';
import { ApiDownloadService } from '../services/api-download.service';

// thành phần xuất excel từ client
import * as xlsx from 'xlsx';
import * as Excel from "exceljs";
import { ApiStrategyMapService } from '../services/api-strategy-map.service';

let config = {
  sheet_name: { type: "select", value: "1.Sheet của Định", options: [{ value: "0.Sheet của Định", name: "0.Sheet của Định" }], name: "Tên sheet bộ chỉ số KPI", validators: [{ required: true }] }
  , id: { type: "text", value: "A", name: "Cột chứa id", validators: [{ required: true }] }
  , name: { type: "text", value: "B", name: "Cột chứa tên", validators: [{ required: true }] }
}

@Component({
  selector: 'app-down-up-excel',
  templateUrl: './down-up-excel.page.html',
  styleUrls: ['./down-up-excel.page.scss'],
})
export class DownUpExcelPage implements OnInit {

  constructor(
    private apiDownload: ApiDownloadService
    , private apiStrategyMap: ApiStrategyMapService
  ) { }

  ngOnInit() {
  }

  onClickDownload() {
    let linkFile = 'http://localhost:3000/db/get-templates/sample.xlsx'
    // console.log(linkFile);
    this.apiDownload.processFileDownload(linkFile
      , config.sheet_name.value
      , "excel"
      , config
      , this.callbackDowload)
  }

  callbackDowload = function (ws: Excel.Worksheet, config: any) {
    return new Promise(async resolve => {
      try {
        // ghi lại bản đồ chiến lược xuống mẫu này
        let result = await this.apiStrategyMap.processStrategyDinh('', ws, config)
        resolve({ status: "OK", message: "Xử lý thành công", count: result.count })
      } catch (e) {
        console.log("Lỗi xử lý dữ liệu callback process", e);
        resolve({ status: "NOK", error: e })
      } finally {
      }
    })
  }.bind(this);

}
