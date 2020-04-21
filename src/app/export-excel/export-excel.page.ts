import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

import * as xlsx from 'xlsx';
import { ApiAuthService } from '../services/api-auth.service';

@Component({
  selector: 'app-export-excel',
  templateUrl: './export-excel.page.html',
  styleUrls: ['./export-excel.page.scss'],
})
export class ExportExcelPage {

  constructor(
    public alertController: AlertController
    , private apiAuth: ApiAuthService
  ) { }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log('data', data);
            this.apiAuth.getDynamicUrl('assets/data/news-info.json')
            .then(res => {
              console.log(res)
              this.exportToExcel()
            })
            .catch(err => console.log(err))
          }
        }
      ]
    });

    await alert.present();
  }

  exportToExcel() {

    let jsonExcel = []

    jsonExcel.push({ report_id: "Kỳ báo cáo1", id: "Mã quản lý1", table_name: "Tên bảng1" })
    jsonExcel.push({ report_id: "Kỳ báo cáo2", id: "Mã quản lý2", table_name: "Tên bảng2" })

    //Nhân bản jsonExcel lên nhiều lần
    for (let i = 1; i < 15; i++) {
      jsonExcel = jsonExcel.concat(jsonExcel)
    }
    console.log(jsonExcel.length);

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

  exportToExcelHeader() {

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

    let header = keys;
    console.log(jsonExcel);
    // let header = keys; // Nếu có header thì header có ý nghĩa gì???
    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(jsonExcel);

    const wb: xlsx.WorkBook = xlsx.utils.book_new();

    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');

    xlsx.writeFile(wb, `epltablereduce-${Date.now()}.xlsx`);
  }

}
