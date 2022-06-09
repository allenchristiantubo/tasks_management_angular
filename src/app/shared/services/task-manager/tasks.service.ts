import { Injectable } from '@angular/core';
import { TaskModel } from '../../models/task-model';
import { catchError, filter, map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers':'Content-Type',
  'X-Skip-Interceptor': 'X-Skip-Interceptor'
};
const requestOptions ={
  headers: new HttpHeaders(headerDict),
};

const TASKS_API_URL = environment.api;
@Injectable({
  providedIn: 'root'
})

export class TasksService {
  
  tableData: TaskModel[] = [];
  
  constructor(private http: HttpClient) { }

  getTableData(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(TASKS_API_URL, requestOptions);
  }

  getTableDataById(id:string): Observable<TaskModel[]>{
    return this.http.get<TaskModel[]>(`${TASKS_API_URL}/${id}`).pipe(
      map(tasks => tasks.filter(t => t.taskId === id))
    )
  }
  
  search(searchKey:string): Observable<TaskModel[]>{
    if(searchKey == ""){
      return this.getTableData();
    }
    else
    {
      return this.http.get<TaskModel[]>(TASKS_API_URL).pipe(
        map(tasks => tasks.filter(t =>{
          return t.taskName.toLowerCase().includes(searchKey.toLowerCase()) ||
          t.taskDescription.toLowerCase().includes(searchKey.toLowerCase())
        }))
      );
    }
    
  }

  addTask(data:any):Observable<TaskModel[]>{
    let body: any = [data];
    console.log(body)
    return this.http.post<TaskModel[]>(TASKS_API_URL, body);
  }

  // editTask(task:any):void{
  //   let index = this.tableData.findIndex(d => d.taskId == task.taskId)
  //   this.tableData[index].taskName = task.taskName;
  //   this.tableData[index].taskDescription = task.taskDescription;
  //   this.tableData[index].taskStatus = task.taskStatus;
  //   this.tableData[index].taskDateModified = new Date();
  //   this.tableData[index].tags = task.tags;
  //   if(task.taskStatus == 'Completed'){
  //     this.tableData[index].taskDateCompleted = new Date();
  //   }
  //   else{
  //     this.tableData[index].taskDateCompleted = null;
  //   }
    
  // }

  // deleteTask(id:number):void{
  //   this.tableData = this.tableData.filter(d => d.taskId != id);
  // }
  
  // findTaskById(id:number):number{
  //   if(id == 0)
  //   {
  //     this.tableData = tasks;
  //   }
  //   else
  //   {
  //     this.tableData = tasks;
  //     this.tableData = this.tableData.filter(d => d.taskId == id);
  //   }
  //   return this.tableData.length;
  // }
}
