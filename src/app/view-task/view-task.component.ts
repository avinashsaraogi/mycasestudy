import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(private service:TaskService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form = null)
    form.resetForm();
    this.service.formData={
    TaskID :(100000+Math.random()*90000),
    TaskName :'',
    Priority :0,
    ParentTaskID : 0,
    ParentTaskName : '',
    StartDate : new Date,
    EndDate : new Date
    };
    this.service.taskList = [];
    
  }

}
