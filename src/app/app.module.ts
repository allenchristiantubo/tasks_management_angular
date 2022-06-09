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
@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    TaskDialogComponent,
    TaskConfirmationDialogComponent,
    TagsComponent,
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
