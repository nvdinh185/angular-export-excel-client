import { Component, OnInit } from '@angular/core';

import * as xlsx from 'xlsx';

@Component({
  selector: 'app-departments-kpi',
  templateUrl: './departments-kpi.page.html',
  styleUrls: ['./departments-kpi.page.scss'],
})
export class DepartmentsKpiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  exportToExcel() {

    let header = ['id', 'name']

    const cols_name = ['Mã số', 'Tên']

    // khai báo thứ tự các dòng ẩn
    let hiddenRow = [0];

    let jsonExcel = []

    jsonExcel.push({ id: 1, name: "Tên bảng 1" })
    jsonExcel.push({ id: 2, name: "Tên bảng 2" })

    //Nhân bản jsonExcel lên nhiều lần
    for (let i = 1; i < 1; i++) {
      jsonExcel = jsonExcel.concat(jsonExcel)
    }

    let secondRow = header.reduce((a, b, idx) => (a[b] = cols_name[idx], a), {});
    jsonExcel.unshift(secondRow)

    console.log(jsonExcel);

    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(jsonExcel);

    // Ẩn các dòng
    ws['!rows'] = [];
    hiddenRow.forEach(el => {
      ws['!rows'][el] = { hidden: true };
    })

    const wb: xlsx.WorkBook = xlsx.utils.book_new();

    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');

    xlsx.writeFile(wb, `excel-${Date.now()}.xlsx`);
  }

  uploadFilesEvent(evt) {
    if (!evt.target || !evt.target.files || !evt.target.files.length) return
    for (let file of evt.target.files) {
      // console.log('file type', file.type);

      let convertFile2Json = new Promise<any>((resolve, reject) => {
        const fr = new FileReader();
        fr.onloadend = (e) => {
          var data = fr.result;
          var wb = xlsx.read(data, { type: 'binary' });
          var jsonSheets = {};
          for (let i = 0; i < wb.SheetNames.length; i++) {
            let sheetName = wb.SheetNames[i]
            Object.defineProperty(jsonSheets, sheetName, { value: [], writable: true, enumerable: true, configurable: true });
            var xlsxJson = xlsx.utils.sheet_to_json(wb.Sheets[sheetName], { header: 'A', blankrows: false, raw: false });
            console.log('Kết quả đọc 1 sheet', xlsxJson);
            jsonSheets[sheetName] = xlsxJson
          }
          resolve(jsonSheets)
        };
        fr.readAsBinaryString(file);
      })

      convertFile2Json.then(sheetData => {
        console.log('Dữ liệu trả về: ', sheetData);
      })
        .catch(err => {
          console.log('Lỗi đọc dữ liệu: ', err);
        })
    }

  }
}
