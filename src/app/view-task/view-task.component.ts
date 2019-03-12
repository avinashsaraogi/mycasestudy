import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { NgForm } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(private service:TaskService,private dialog:MatDialog) { }

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
    this.service.taskList = 
    
  }
  EditTask(taskIndex,TaskID){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {taskIndex,TaskID}
    this.dialog.open(AddTaskComponent,dialogConfig);
  }

}
