import { PipeTransform, Pipe } from '@angular/core';
import { Task } from './task.model';

@Pipe({
    name: 'taskFilter',
})

export class TaskFilterPipe implements PipeTransform{
    transform(tasks:Task[],searchString: string) : Task[] {
        if(!tasks || !searchString) {
            return tasks;
        }
        return tasks.filter(task => 
            task.taskName.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
    }
}
