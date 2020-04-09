import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentsKpiPage } from './departments-kpi.page';

const routes: Routes = [
  {
    path: '',
    component: DepartmentsKpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsKpiPageRoutingModule {}
