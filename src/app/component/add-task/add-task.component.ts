import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addTask(titelName:any, des:any){
    this.addTask(titelName.value, des.value),
    this.router.navigate(['/'])

  }
  rout(){
    this.router.navigate(['/'])
  }
}
