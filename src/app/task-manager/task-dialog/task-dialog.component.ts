import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskConfirmationDialogComponent } from '../task-confirmation-dialog/task-confirmation-dialog.component';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class TaskDialogComponent implements OnInit {

  taskManagerFormGroup = this._formBuilder.group({
    name : [null, Validators.required],
    description : [null, Validators.required],
    status : [null, Validators.required]
  });

  tagsFormGroup = this._formBuilder.group({
    tags : [null, Validators.required]
  });

  options: any;
  constructor(private dialog: MatDialog, 
              private _formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<TaskDialogComponent>, // to close dialog
              @Inject(MAT_DIALOG_DATA) public data: any,) 
              { 
                this.options = data;
              }

  ngOnInit(): void {
    //this.setValue();
  }

  setValue(){
    //his.taskManagerFormGroup.controls['name'].setValue('');
  }
  save(action : string){
    this.dialog.open(TaskConfirmationDialogComponent, {
      data: {action: action, header: action + " Task", content:"Success"}
    });
  }

  cancel(){
    this.dialogRef.close()
  }

  notify(event: string){
    console.log("Value: ", event);
  }
}
