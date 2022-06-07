import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-task-confirmation-dialog',
  templateUrl: './task-confirmation-dialog.component.html',
  styleUrls: ['./task-confirmation-dialog.component.scss']
})
export class TaskConfirmationDialogComponent implements OnInit {
  options: any;
  constructor(private dialog: MatDialog, 
              public dialogRef: MatDialogRef<TaskConfirmationDialogComponent>, // to close dialog
              @Inject(MAT_DIALOG_DATA) public data: any,) 
              { 
                this.options = data;
              }
  ngOnInit(): void {
  }

  Yes(){
    this.dialogRef.close();
  }

  No(){
    this.dialogRef.close();
  }

}
