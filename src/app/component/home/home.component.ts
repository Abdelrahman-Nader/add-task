import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TaskesService } from 'src/app/serves/taskes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public taskSer:TaskesService, public title: Title ) {
    // this.taskSer.tasks
    this.title.setTitle('Task Manager')
  }

  ngOnInit(): void {
  }
  deleteTask(i: any) {
    this.taskSer.deleteTask(i)
  }
}
