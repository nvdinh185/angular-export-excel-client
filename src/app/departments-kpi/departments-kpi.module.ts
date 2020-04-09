import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepartmentsKpiPageRoutingModule } from './departments-kpi-routing.module';

import { DepartmentsKpiPage } from './departments-kpi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepartmentsKpiPageRoutingModule
  ],
  declarations: [DepartmentsKpiPage]
})
export class DepartmentsKpiPageModule {}
