import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../shared/task.model';
 
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
]

})
export class AddTaskComponent implements OnInit {
    formData:Task;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<AddTaskComponent>
  ) { }

  ngOnInit() {
    this.formData = {
      TaskID:this.data.TaskID,
      TaskName : '',
      ParentTaskID : 0,
      ParentTaskName : '',
      Priority : 1,
      StartDate : new Date(),
      EndDate : new Date()



    }
  }

}
