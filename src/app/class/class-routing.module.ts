import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClassComponent } from './add-class/add-class.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { EditClassComponent } from './edit-class/edit-class.component';
import { ListClassComponent } from './list-class/list-class.component';

const routes: Routes = [
  {
    path:'',
    component: ListClassComponent
  },
  {
    path:'add-class',
    component: AddClassComponent
  },
  {
    path:'edit-class/:classId',
    component: EditClassComponent
  },
  {
    path:'attendance/:classId',
    component: AttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
