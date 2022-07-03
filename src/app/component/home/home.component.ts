import { Component, OnInit } from '@angular/core';
import { TaskesService } from 'src/app/serves/taskes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public taskSer:TaskesService ) {
    // this.taskSer.tasks 
    
  }

  ngOnInit(): void {
  }
  deleteTask(i: any) {
    this.taskSer.deleteTask(i)
  }
}
