import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'export-excel', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'departments-kpi',
    loadChildren: () => import('./departments-kpi/departments-kpi.module').then( m => m.DepartmentsKpiPageModule)
  },
  {
    path: 'export-excel',
    loadChildren: () => import('./export-excel/export-excel.module').then( m => m.ExportExcelPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
