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
      id: 1,
    }
  ]
  constructor() { }
  deleteTask(i:any): void {
    this.tasks.splice(i, 1)
  }
}
