import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AgendaComponent } from './agenda/agenda.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { EditEmployeeComponent } from './admin/edit-employee/edit-employee.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, children: [
    { path: 'addemployee', pathMatch: 'full', component: AddEmployeeComponent},
    { path: 'editemployee', component: EditEmployeeComponent}
  ]},
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'agenda', component: AgendaComponent},
  { path: 'contactus', component: ContactUsComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent} //this must be on end array
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
