import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//-component
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TaskDialogComponent } from './task-manager/task-dialog/task-dialog.component';
import { TaskConfirmationDialogComponent } from './task-manager/task-confirmation-dialog/task-confirmation-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsComponent } from './task-manager/tags/tags.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskAddFormComponent } from './task-manager/task-add-form/task-add-form.component';
import { TaskEditFormComponent } from './task-manager/task-edit-form/task-edit-form.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    TaskDialogComponent,
    TaskConfirmationDialogComponent,
    TagsComponent,
    TaskAddFormComponent,
    TaskEditFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
