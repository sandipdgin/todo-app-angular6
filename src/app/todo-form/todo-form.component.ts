import { Component, OnInit } from '@angular/core';
import { Todo } from './../todo';
import { TodoServiceService } from '../todo-service.service';
@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoArray$ = [];
  priorities = [
    { id:1, colorName:"red"},
    { id:2, colorName:"green"},
    { id:3, colorName:"blue"}
  ]

  constructor(private todoService:TodoServiceService) { 
    //this.todoArray$ = this.todoService.getAllTasks();
    //console.log("ccc", this.todoArray$);
  }

  ngOnInit() {
    console.log( );
  }

  addTodo(f){
    console.log(f, f.value);
    (f.value.taskTitle !== "" && f.value.priority !== "") ? this.todoService.addTodo(f.value.taskTitle, f.value.priority) : console.log("error occure");


    /* if(f.value.taskTitle !== "" && f.value.priority !== ""){
      console.log("no error");
    } else {
      console.log("error occure");
    } */

    /* if(value.todo !== "" || value.todo !== undefined) {
      this.todoService.addTodo(value.todo, value.priority);
    } else {
      alert("The field is required.")
    } */
  }

  trackPriority(index, pColor){
    return pColor ? pColor.id : undefined;
  }
}
