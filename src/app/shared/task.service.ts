import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  formData:Task;
  taskList:Task[];

  constructor(private http:HttpClient) { }

  getTaskList(){
    return this.http.get(environment.apiURL+'/tasks').toPromise();
  }
}
