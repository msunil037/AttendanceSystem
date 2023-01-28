import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ListClassComponent } from './list-class/list-class.component';
import { AddClassComponent } from './add-class/add-class.component';
import { EditClassComponent } from './edit-class/edit-class.component';
import { FormsModule } from '@angular/forms';
import { AttendanceComponent } from './attendance/attendance.component';


@NgModule({
  declarations: [
    ListClassComponent,
    AddClassComponent,
    EditClassComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    FormsModule
  ]
})
export class ClassModule { }
