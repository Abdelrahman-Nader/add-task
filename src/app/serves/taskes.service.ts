import { Injectable } from '@angular/core';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TaskesService {

  public tasks: Array<Task> =[
    {
      title: "1",
      Description: "mens",
    }
  ]
  constructor() { }
  deleteTask(i:any): void {
    this.tasks.splice(i, 1)
  }
  addTask(title:string, Description:string){
    this.tasks.push({
      title,
      Description
    })

  }
  editTask(i, data){

  }
}
