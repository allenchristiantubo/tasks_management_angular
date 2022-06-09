import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskConfirmationDialogComponent } from '../task-confirmation-dialog/task-confirmation-dialog.component';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { TasksService } from 'src/app/shared/services/task-manager/tasks.service';
import { TaskStatus } from 'src/app/shared/models/task-model';

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
  eTaskStatus:any = TaskStatus;
  taskManagerFormGroup = this._formBuilder.group({
    taskName : [null, Validators.required],
    taskDescription : [null, Validators.required],
    status : [null]
  });

  tagsFormGroup = this._formBuilder.group({
    tag : [[], Validators.required]
  });

  constructor(private taskService: TasksService,
              private dialog: MatDialog, 
              private _formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<TaskDialogComponent>, // to close dialog
              @Inject(MAT_DIALOG_DATA) public data: any,) 
              { 
                
              }

  ngOnInit(): void {
    this.setValue();
  }

  setValue(){
    if(this.data.header === 'Edit')
    {
      this.taskManagerFormGroup.controls['taskName'].setValue(this.data.task.taskName);
      this.taskManagerFormGroup.controls['taskDescription'].setValue(this.data.task.taskDescription);
      this.taskManagerFormGroup.controls['status'].setValue(this.data.task.status.toString());
      this.tagsFormGroup.controls['tags'].setValue(this.data.task.tags);
    }
  }
  
  save(action : string, taskId?: number){
    let task = this.taskManagerFormGroup.value;
    let tagFormGroup = this.tagsFormGroup.controls['tag'].value as [];
    task.tag = tagFormGroup.map(tag => ({ tagName: tag['tagName'] }));
    if(action == 'Add'){
      task.status = TaskStatus.New;
    }
    this.dialog.open(TaskConfirmationDialogComponent, {
      data: {action: action, header: action + " Task", content:"Success"}
    });
    this.cancel(task);
  }

  cancel(data?:any, ){
    this.dialogRef.close(data);
  }
}
