import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownUpExcelPage } from './down-up-excel.page';

const routes: Routes = [
  {
    path: '',
    component: DownUpExcelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownUpExcelPageRoutingModule {}
