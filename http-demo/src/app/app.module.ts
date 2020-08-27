import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { PostComponent } from './post/post.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { TreatmentsService } from './services/treatments.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    PostComponent,
    TreatmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService, PostService, TreatmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
