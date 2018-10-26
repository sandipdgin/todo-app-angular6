import { Injectable } from '@angular/core';
import { Todo } from './todo';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private todoArr: Todo[];
  private nextId: number;

  constructor() { 
    this.todoArr = [
      new Todo(0, "task 0", "red"),
      new Todo(1, "task 1", "blue"),
      new Todo(2, "task 2", "green")
    ];
    this.nextId = 3;
  }

  addTodo(text1:string, text2:string):void {
    let currentTodo = new Todo(this.nextId, text1, text2);
    this.todoArr.push(currentTodo);
    this.nextId++;
    console.log("service", currentTodo);

  }

  getAll(){

  }
}
