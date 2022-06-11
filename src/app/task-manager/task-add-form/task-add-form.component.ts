import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/shared/services/task-manager/tasks.service';

@Component({
  selector: 'app-task-add-form',
  templateUrl: './task-add-form.component.html',
  styleUrls: ['./task-add-form.component.scss']
})
export class TaskAddFormComponent implements OnInit {
  taskManagerFormGroup = this._formBuilder.group({
    taskName : [null, Validators.required],
    taskDescription : [null, Validators.required],
    status : [0]
  });
  
  tagsFormGroup = this._formBuilder.group({
    tag : [[], Validators.required]
  });
  
  constructor(private _snackBar: MatSnackBar, 
              private _formBuilder: FormBuilder,
              private _route: ActivatedRoute,
              private _router: Router,
              private taskService: TasksService) { }

  ngOnInit(): void {
  }

  save(){
    let task = this.taskManagerFormGroup.value;
    let tagFormGroup = this.tagsFormGroup.controls['tag'].value as [];
    task.tag = tagFormGroup.map(tag => ({ tagName: tag['tagName'] }));

    this.taskService.addTask(task).subscribe({next: (data) => {
      if(data){
        this.openSnackBar("Task saved successfully", "Close");
      }
    }});
    
  }

  openSnackBar(message: string, action: string) {
    const snackBarOpt: MatSnackBarConfig = {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom'
    };

    let snackBarRef = this._snackBar.open(message, action, snackBarOpt);

    snackBarRef.afterDismissed().subscribe(() =>{
      this._router.navigate(['/']);
    });
    
    snackBarRef.onAction().subscribe(() =>{
      snackBarRef.dismiss();
      this._router.navigate(['/']);
    });
  }

  onBack(){
    this._router.navigate(['/']);
  }
}
