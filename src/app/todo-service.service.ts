import { Injectable } from '@angular/core';
import { Todo } from './todo';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private todoArr: Todo[];
  private nextId: number;
  private filterTodoArray$ = [];

  constructor() { 
    this.todoArr = [
      new Todo(0, "task 0", "red"),
      new Todo(1, "task 1", "blue"),
      new Todo(2, "task 2", "green")
    ];
    this.nextId = 3;

    //set in localstorage
    localStorage.setItem("tasklist", JSON.stringify(this.todoArr));
  }

  getAllTasks(){
    this.todoArr = JSON.parse(localStorage.getItem("tasklist"));
   //console.log("getAllTasks", this.todoArr );
    return this.todoArr;
  }

  addTodo(text1:string, text2:string):void {
    let currentTodo = new Todo(this.nextId, text1, text2);
    this.todoArr.push(currentTodo);
    // localstorage
    if (localStorage.getItem("tasklist") !== null) {
      localStorage.removeItem("tasklist");
    } 
    localStorage.setItem("tasklist", JSON.stringify(this.todoArr));
    this.nextId++;
    console.log("service", this.todoArr, currentTodo);
  }

  filterRedTasks(clr: string){
    //this.route.paramMap.subscribe(params => console.log("red ",params));
    return this.todoArr.filter(tasks => tasks.priority.toLowerCase() === clr);
  }

}
