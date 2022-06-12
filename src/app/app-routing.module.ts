import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAddFormComponent } from './task-manager/task-add-form/task-add-form.component';
import { TaskEditFormComponent } from './task-manager/task-edit-form/task-edit-form.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';

const routes: Routes = [
  {path:'tasks/:id', component: TaskEditFormComponent},
  {path:'tasks', component: TaskAddFormComponent},
  {path:'', component: TaskManagerComponent},
  {path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
