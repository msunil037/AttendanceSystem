import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';

const routes: Routes = [
    {
        path:'',
        component: ListTeacherComponent
    },
    {
        path:'add-teacher',
        component: AddTeacherComponent
    },
    {
        path: 'edit-teacher/:id',
        component: EditTeacherComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
