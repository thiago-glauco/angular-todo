import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output( ) newTaskInput: EventEmitter<string> = new EventEmitter( );

  constructor() { }


  ngOnInit() {

  }

  enterTask( taskInput: HTMLInputElement ) {
    if( taskInput.value ) {
      if( taskInput.value.length < 150 ) {
        this.newTaskInput.emit(taskInput.value);
        taskInput.value = '';
        taskInput.focus( );
      } else {
        alert( "A descrição não deve ser superior a 150 caracteres" );
      }
    } else {
      alert( "Insira uma descrição para a tarefa!" );
    }
  }

}