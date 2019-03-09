import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { HomeComponent } from './home/home.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-task', component: AddTaskComponent},
  {path: 'view-task', component: ViewTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
