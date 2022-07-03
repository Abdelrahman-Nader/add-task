import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { TaskComponent } from './component/task/task.component';

const routes: Routes = [
  { path: "", component : HomeComponent},
  { path: "add-task", component : AddTaskComponent},
  { path: "task", component : TaskComponent},
  { path: "task/:id", component : TaskComponent},
  { path: "**", component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
