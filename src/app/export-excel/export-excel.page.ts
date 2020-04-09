import { Component } from '@angular/core';

import * as xlsx from 'xlsx';

@Component({
  selector: 'app-export-excel',
  templateUrl: './export-excel.page.html',
  styleUrls: ['./export-excel.page.scss'],
})
export class ExportExcelPage {

  constructor() { }

  exportToExcel() {

    let jsonExcel = []

    jsonExcel.push({ report_id: "Kỳ báo cáo1", id: "Mã quản lý1", table_name: "Tên bảng1" })
    jsonExcel.push({ report_id: "Kỳ báo cáo2", id: "Mã quản lý2", table_name: "Tên bảng2" })

    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(jsonExcel);

    const wb: xlsx.WorkBook = xlsx.utils.book_new();

    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');

    xlsx.writeFile(wb, `epltable-${Date.now()}.xlsx`);
  }

  exportToExcelHidden() {

    let jsonExcel = []

    jsonExcel.push({ report_id: "Kỳ báo cáo1", id: "Mã quản lý1", table_name: "Tên bảng1" })
    jsonExcel.push({ report_id: "Kỳ báo cáo2", id: "Mã quản lý2", table_name: "Tên bảng2" })

    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(jsonExcel);

    // Ẩn dòng đầu tiên
    ws['!rows'] = [];
    ws['!rows'][0] = { hidden: true };

    const wb: xlsx.WorkBook = xlsx.utils.book_new();

    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');

    xlsx.writeFile(wb, `epltableHidden-${Date.now()}.xlsx`);
  }

  exportToExcelreduce() {

    const keys = [
      'report_id'
      , 'id'
      , 'table_name'
    ]

    const cols_name = [
      'Kỳ báo cáo'
      , 'Mã quản lý'
      , 'Tên bảng'
    ]

    let jsonExcel = []

    let secondRow = keys.reduce((a, b, idx) => (a[b] = cols_name[idx], a), {});
    jsonExcel.push(secondRow)

    console.log(jsonExcel);
    // let header = keys; // Nếu có header thì header có ý nghĩa gì???
    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(jsonExcel);

    const wb: xlsx.WorkBook = xlsx.utils.book_new();

    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');

    xlsx.writeFile(wb, `epltablereduce-${Date.now()}.xlsx`);
  }

}
