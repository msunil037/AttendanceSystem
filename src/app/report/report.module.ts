import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report/report.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
