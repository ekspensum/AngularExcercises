import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  // { path: '', redirectTo: '/department', pathMatch: 'full'},
  { path: 'department', component: DepartmentComponent},
  { path: 'department/:id', component: DepartmentDetailComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: '**', component: PageNotFoundComponent} //this must be on end array
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
