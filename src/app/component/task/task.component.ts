import { Title } from '@angular/platform-browser';
import { TaskesService } from 'src/app/serves/taskes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskId: any
  task: any

  constructor(private rout: ActivatedRoute,
    public taskSer: TaskesService,
    private rouetr: Router,
    public title: Title) {
      this.title.setTitle( 'Task Manager')
    }

  ngOnInit(): void {
    this.taskId = this.rout.snapshot.paramMap.get('id')

    setTimeout(() => {
      this.task = this.taskSer.tasks[this.taskId]
    }, 1000)
  }

  addTask() {
    this.taskSer.editTask(this.taskId, this.task)
    this.rouetr.navigate(['/'])

  }

  deleteRout(){
    this.taskSer.deleteTask(this.taskId)
    this.rouetr.navigate(['/']);
  }
  rout1(){
    this.rouetr.navigate(['/'])
  }



}




