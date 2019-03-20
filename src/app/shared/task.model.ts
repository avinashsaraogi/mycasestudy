
export class Task {
    taskID :number;
    taskName :string;
    priority :number;
    parentTask:Task;
    startDate : Date;
    endDate : Date;
    status : number;
}
