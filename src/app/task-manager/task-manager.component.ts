import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TaskConfirmationDialogComponent } from './task-confirmation-dialog/task-confirmation-dialog.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { TasksService } from '../shared/services/task-manager/tasks.service';
import { TaskModel } from '../shared/models/task-model';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['taskName', 'taskDescription', 'taskDateCreated', 'taskDateModified','taskDateCompleted','tags', 'taskStatus', 'actions'];
  dataSource = new MatTableDataSource<TaskModel>();
  clonedDataSource: TaskModel[] = [];
  
  filterValue : string = '';
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  //this.dataSource.filterPredicate = (data: TaskData, filterValue : string ) => data.taskName.indexOf(filterValue) != 1;
  constructor(private dialog: MatDialog,
              private taskService: TasksService,
              private cd: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.populateTable();
    this.dataSource.filterPredicate = function(data, filter : string) : boolean {
      return data.taskStatus.toLowerCase().includes(filter)
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(header : string, task?:any){
    const dialog = this.dialog.open(TaskDialogComponent, {
      data : {header:header, task:task},
    }).afterClosed().subscribe((data: any) =>{
      if(data){
        console.log(data);
        if(header == 'Add'){
          this.taskService.addTask(data)
        } else if(header == 'Edit'){

        }
        // let tableData =  data as any;
        // this.dataSource = new MatTableDataSource(tableData.data);
        this.populateTable(true);
        this.cd.detectChanges();
      }
    });
  }

  openDialogConfirmation(){
    const dialog = this.dialog.open(TaskConfirmationDialogComponent, {
      width:'300px',
      data: {action:'Delete', header:'Delete Task', content:'Are you sure?', confirmButton: 'Yes', cancelButton: 'No'}
    });
  }

  populateTable(isAction?:boolean): void{
    let data = this.taskService.getTableData(isAction);
    this.dataSource.data = data;
    this.clonedDataSource = data;
  }

  search(){    
    this.filterValue = this.filterValue.trim();
    this.filterValue = this.filterValue.toLowerCase();
    this.dataSource.filter = this.filterValue;
  }
}
