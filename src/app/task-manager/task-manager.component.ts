import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TaskConfirmationDialogComponent } from './task-confirmation-dialog/task-confirmation-dialog.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';

export interface TaskData{
  taskName: string;
  taskDescription: string;
  taskDateCreated: any;
  taskDateModified: any;
  taskDateCompleted: any;
  taskTags: string;
  taskStatus: string;
}

const TASK_DATA: TaskData[] = [
  { taskName: "Learn C#", taskDescription: "Start Learning C#", taskDateCreated: "2022-05-25",taskDateModified : "2022-05-30", taskDateCompleted: "", taskTags: "Web Development", taskStatus: "In Progress"},
  { taskName: "Learn ASP", taskDescription: "Start Learning ASP.Net", taskDateCreated: "2022-05-30", taskDateModified : "2022-05-31", taskDateCompleted: "", taskTags: "Web Development", taskStatus: "New"},
  { taskName: "Code Review on Sorting", taskDescription: "View codes on sorting",taskDateCreated: "2022-05-20", taskDateModified : "2022-05-30", taskDateCompleted: "2022-05-31", taskTags: "Code Review", taskStatus: "Completed"},
  { taskName: "Angular Design",  taskDescription: "Create landing and login page",taskDateCreated: "2022-05-30", taskDateModified: "2022-05-30", taskDateCompleted: "2022-05-31",taskTags: "Web Design",taskStatus: "Completed"},
];

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['taskName', 'taskDescription', 'taskDateCreated', 'taskDateModified','taskDateCompleted','taskTags', 'taskStatus', 'actions'];
  dataSource = new MatTableDataSource(TASK_DATA);
  
  filterValue : string = '';
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  //this.dataSource.filterPredicate = (data: TaskData, filterValue : string ) => data.taskName.indexOf(filterValue) != 1;
  constructor(private dialog: MatDialog ) { }
  ngOnInit(): void {
    this.dataSource.filterPredicate = function(data, filter : string) : boolean {
      return data.taskStatus.toLowerCase().includes(filter)
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(header : string){
    const dialog = this.dialog.open(TaskDialogComponent, {
      data : {header:header}
    });
  }

  openDialogConfirmation(){
    const dialog = this.dialog.open(TaskConfirmationDialogComponent, {
      width:'300px',
      data: {action:'Delete', header:'Delete Task', content:'Are you sure?', confirmButton: 'Yes', cancelButton: 'No'}
    });
  }

  search(){    
    this.filterValue = this.filterValue.trim();
    this.filterValue = this.filterValue.toLowerCase();
    this.dataSource.filter = this.filterValue;
  }
}
