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
      new Todo(1, "task 1", "red"),
      new Todo(2, "task 2", "blue"),
      new Todo(3, "task 3", "green")
    ];
    this.nextId = 4;
    localStorage.setItem("tasklist", JSON.stringify(this.todoArr));
  }

  filterTasks(clr: string){
    console.log("service clr ", clr);
    if(clr == null){
      return this.todoArr = JSON.parse(localStorage.getItem("tasklist"));
    } else {
      return this.todoArr.filter(tasks => tasks.priority.toLowerCase() === clr);
    }
  }

  addTodo(text1:string, text2:string):void {
    let currentTodo = new Todo(this.nextId, text1, text2);
    this.todoArr.push(currentTodo);
    if (localStorage.getItem("tasklist") !== null) {
      localStorage.removeItem("tasklist");
    } 
    localStorage.setItem("tasklist", JSON.stringify(this.todoArr));
    this.nextId++;
  }
}
