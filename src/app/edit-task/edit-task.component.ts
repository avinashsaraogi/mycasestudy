import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';
import { NgForm } from '@angular/forms';


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
  parenttaskList:Task[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<EditTaskComponent>,
    private taskService:TaskService
  ) { }

  ngOnInit() {
    this.taskService.getTaskList().then(res => this.parenttaskList = res as Task[])
    this.formData = {
      taskID:this.data.taskID,
      taskName : '',
      parentTask : new Task(),
      priority : 1,
      startDate : new Date(),
      endDate : new Date(),
      status : 0
  }
  }

  onSubmit(form:NgForm){
    this.taskService.taskList.push(form.value);
    //this.dialogRef.close();
    this.closeDialog();
  }

  onChange($event){
    console.log($event)
  } 

  closeDialog(): void {
    this.dialogRef.close();
  }


}
