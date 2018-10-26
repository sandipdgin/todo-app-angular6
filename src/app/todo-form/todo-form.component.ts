import { Component, OnInit } from '@angular/core';
import { Todo } from './../todo';
import { TodoServiceService } from '../todo-service.service';
@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoArray = [];

  constructor(private todoService:TodoServiceService) { }

  ngOnInit() {
    console.log( );
  }

  addTodo(value){
    console.log(value, value.todo, value.priority);
    /* if(value.todo !== "" || value.todo !== undefined) {
      this.todoService.addTodo(value.todo, value.priority);
    } else {
      alert("The field is required.")
    } */
  }
}
