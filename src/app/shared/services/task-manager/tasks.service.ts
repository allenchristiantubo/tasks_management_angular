import { Injectable } from '@angular/core';
import { ITags, TaskModel } from '../../models/task-model';
import { tasks } from 'src/app/task-manager/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tableData: TaskModel[] = [];

  constructor() { }

  getTableData(isAction?: boolean): TaskModel[] {
    if(!isAction){
      this.tableData = tasks;
    }
    return this.tableData;
  }

  addTask(task:any): void{
    task.taskDateCreated = new Date();
    task.taskDateModified = new Date();
    this.tableData.push(task);
  }
}
