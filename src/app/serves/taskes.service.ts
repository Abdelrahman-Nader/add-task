import { Injectable } from '@angular/core';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TaskesService {

  tasks: Array<Task> =[]
  constructor() { }
}
