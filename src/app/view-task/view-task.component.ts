import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { NgForm } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { Task } from '../shared/task.model';


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
    taskID :(100000+Math.random()*90000),
    taskName :'',
    priority :0,
    parentTask: new Task(),
    startDate : new Date,
    endDate : new Date,
    status : false,
    };
    this.service.taskList = [];
    
  }
  EditTask(taskIndex,taskID){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {taskIndex,taskID}
    this.dialog.open(EditTaskComponent,dialogConfig);
  }

}
