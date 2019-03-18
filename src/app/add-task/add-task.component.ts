import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';
import { NgForm } from '@angular/forms';
import { ParentTask } from '../shared/parent-task.model';
 
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],

})
export class AddTaskComponent implements OnInit {
    formData:Task;
    taskList:Task[];
  
  constructor(
    private taskService:TaskService
  ) { }

  ngOnInit() {
    this.taskService.getTaskList().then(res => this.taskList = res as Task[])
    this.formData = {
      taskID:null,
      taskName : '',
      parentTask: new ParentTask(),
      priority : 1,
      startDate : new Date(),
      endDate : new Date()
    }
  }

  onSubmit(form:NgForm){
    this.taskService.taskList.push(form.value);
  }

}
