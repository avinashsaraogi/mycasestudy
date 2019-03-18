import { ParentTask } from "./parent-task.model";

export class Task {
    taskID :number;
    taskName :string;
    priority :number;
    parentTask:ParentTask;
    startDate : Date;
    endDate : Date;
}
