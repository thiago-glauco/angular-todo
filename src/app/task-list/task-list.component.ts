import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks = [
    {id: 1, title: "task 1", done: true},
    {id: 2, title: "task 2", done: false},
  ]

  constructor() { }

  ngOnInit() {
  }

  addTask(title: string) {
    this.tasks.push({
      id: ( this.tasks[ this.tasks.length - 1 ].id + 1 ),
      title: title,
      done: false
    })
    console.log(this.tasks);
  }

}