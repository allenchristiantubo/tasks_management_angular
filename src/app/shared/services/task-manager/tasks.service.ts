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
    return this.http.get<TaskModel[]>(`${TASKS_API_URL}/${id}`);
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
    return this.http.post<TaskModel[]>(TASKS_API_URL, data, requestOptions);
  }

  editTask(data:any, id:string):Observable<TaskModel[]>{
    return this.http.put<TaskModel[]>(`${TASKS_API_URL}/${id}`, data, requestOptions);
  }

  deleteTask(id:string):Observable<TaskModel[]>{
    return this.http.delete<TaskModel[]>(`${TASKS_API_URL}/${id}`, requestOptions);
  }
}
