import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() tagsFormGroup! : FormGroup;
  @Output() getVal : EventEmitter<any> = new EventEmitter<any>();
  
  tagList: string[] = ['Bugs', 'Design', 'Programming', 'Data Analysis', 'Code Review'];
  
  
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.tagsFormGroup);
  }
}
