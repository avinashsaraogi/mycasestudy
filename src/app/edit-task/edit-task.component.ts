import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';
import { NgForm } from '@angular/forms';
import { ParentTask } from '../shared/parent-task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
]
})
export class EditTaskComponent implements OnInit {
  formData:Task;
  taskList:Task[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<EditTaskComponent>,
    private taskService:TaskService
  ) { }

  ngOnInit() {
    //this.taskService.getTaskList().then(res => this.taskList = res as Task[])
    this.formData = {
      taskID:this.data.taskID,
      taskName : '',
      parentTask : new ParentTask(),
      priority : 1,
      startDate : new Date(),
      endDate : new Date()
  }
  }

  onSubmit(form:NgForm){
    //this.taskService.taskList.push(form.value);
    this.dialogRef.close();
  }
}
