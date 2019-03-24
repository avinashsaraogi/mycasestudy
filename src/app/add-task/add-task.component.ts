import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';
import { NgForm } from '@angular/forms';

 
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],

})
export class AddTaskComponent implements OnInit {
    formData:Task;
    parenttaskList:Task[] = [];
  
  constructor(
    private taskService:TaskService
  ) { }

  ngOnInit() {
    this.taskService.getTaskList().then(res => this.parenttaskList = res as Task[]);
    console.log(this.parenttaskList.length);
    this.formData = {
      taskID:null,
      taskName : '',
      parentTask: new Task(),
      priority : 1,
      startDate : new Date(),
      endDate : new Date(),
      status : 0
    }
  }

  onSubmit(form:NgForm){
    this.taskService.taskList.push(form.value);
    console.log(form.value);
  }

  updateParentName(ctrl){
    if(ctrl.selectedIndex==0){
      this.formData.parentTask = null;
    }
    else{
      console.log(this.parenttaskList[ctrl.selectedIndex-1]);
      this.formData.parentTask.taskID = JSON.parse(JSON.stringify(this.parenttaskList[ctrl.selectedIndex-1])).taskId;
      console.log(JSON.parse(JSON.stringify(this.parenttaskList[ctrl.selectedIndex-1])).taskId);
    }
  }

}
