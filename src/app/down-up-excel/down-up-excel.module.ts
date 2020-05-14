import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownUpExcelPageRoutingModule } from './down-up-excel-routing.module';

import { DownUpExcelPage } from './down-up-excel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownUpExcelPageRoutingModule
  ],
  declarations: [DownUpExcelPage]
})
export class DownUpExcelPageModule {}
