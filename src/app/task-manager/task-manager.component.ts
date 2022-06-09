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

  displayedColumns: string[] = ['taskName', 'taskDescription', 'taskDateCreated', 'taskDateModified','taskDateFinished','tags', 'taskStatus', 'actions'];
  dataSource = new MatTableDataSource<TaskModel>();
  
  searchKey : string = '';
  @ViewChild(MatPaginator) paginator! : MatPaginator;

  constructor(private dialog: MatDialog,
              private taskService: TasksService,
              private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.populateTable();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(header : string, task?:any){
    const dialog = this.dialog.open(TaskDialogComponent, {
      data : {header:header, task:task},
    }).afterClosed().subscribe((data: any) =>{
      if(data){
        if(header == 'Add'){
          this.taskService.addTask(data)
        } else if(header == 'Edit'){
          //this.taskService.editTask(data);
        }
        this.populateTable();
        this.cd.detectChanges();
      }
    }, (error:any) => {
      console.log(error);
    });
  }

  populateTable(): void{
    this.taskService.getTableData().subscribe( data => {
      this.dataSource.data = data;
    });
  }

  search(){
    this.searchKey= this.searchKey.trim();
    this.searchKey = this.searchKey.toLowerCase();
    this.taskService.search(this.searchKey).subscribe(data =>{
      if(data){
        this.dataSource.data = data;
        this.cd.detectChanges();
      }
    })
  }

  openDialogConfirmation(task:any){
    // const dialog = this.dialog.open(TaskConfirmationDialogComponent, {
    //   width:'300px',
    //   data: {action:'Delete', header:'Delete', content:'Are you sure?', confirmButton: 'Yes', cancelButton: 'No', task:task}
    // }).afterClosed().subscribe((data:any) =>{
    //   if(data){
    //     this.taskService.deleteTask(data.taskId);
    //   }
    //   this.populateTable();
    //   this.cd.detectChanges();
    // });
  }

  
}
