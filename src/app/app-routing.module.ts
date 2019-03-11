import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { HomeComponent } from './home/home.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  {path: '', redirectTo:'view-task',pathMatch:'full'},
  {path: 'add-task', component: AddTaskComponent},
  {path: 'view-task', children:[
    {path: '', component: ViewTaskComponent},
    {path: 'edit/:id', component: ViewTaskComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
