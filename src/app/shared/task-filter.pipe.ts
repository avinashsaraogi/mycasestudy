import { PipeTransform, Pipe } from '@angular/core';
import { Task } from './task.model';

@Pipe({
    name: 'taskFilter',
})

export class TaskFilterPipe implements PipeTransform{
    transform(tasks:Task[],
        taskNameSearch: string,
        parentTaskNameSearch: string,
        priorityFromSearch: string,
        priorityToSearch: string,
        startDateSearch: string,
        endDateSearch: string
        ) : Task[] {
        
        if(!tasks) {
            return tasks;
        }
        if(taskNameSearch != ""){
            console.log(tasks);
            tasks = [...tasks.filter(task => 
                task.taskName.toLowerCase().includes(taskNameSearch.toLowerCase()))];
        }
        if(parentTaskNameSearch != ""){
            tasks = [...tasks.filter(task => 
                task.parentTask.taskName.toLowerCase().includes(parentTaskNameSearch.toLowerCase()))];
        }
        if(priorityFromSearch != ""){
            tasks = [...tasks.filter(task => 
                task.priority >= Number(priorityFromSearch.toLowerCase()))];
        }
        if(priorityToSearch != ""){
            //priorityToSearch = priorityToSearch.toLowerCase();
            tasks = [...tasks.filter(task => 
                task.priority <= Number(priorityToSearch.toLowerCase()))];
        }
        if(startDateSearch != ""){
            let date = new Date(startDateSearch);
            tasks = [...tasks.filter(task => 
                task.startDate >= date)];
        }
        if(endDateSearch != ""){
            let date = new Date(endDateSearch);
            tasks = [...tasks.filter(task => 
                task.endDate >= date)];
        }
        return tasks;
    }
}
