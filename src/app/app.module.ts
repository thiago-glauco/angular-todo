import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, HelloComponent, TaskListComponent, TaskComponent, AddTaskComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
