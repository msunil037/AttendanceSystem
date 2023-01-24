import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListTeacherComponent,
    AddTeacherComponent,
    EditTeacherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
