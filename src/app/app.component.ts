import { Todo } from './todo';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
// import { trigger, animate, style, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoArray=[];
  todo;
  todoForm;
  orders = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' }
  ];
  todoModel = new Todo("Task 1", "red");

  private element: HTMLInputElement;

  constructor(elRef: ElementRef){
    this.element = elRef.nativeElement;
  }

  ngOnInit() {
    console.log("11", this.todoArray);
  }

  
  //todoForm: new FormGroup()
  /* addTodo(value){
    if(value!==""){
     this.todoArray.push(value);
     this.todoForm.resetForm();
    }else{
      alert('Field required **')
    }
  } */
  displaytodo(){
    //console.log("11", this.element.getElementsByClassName(""));
  }

  addTodo(value){
    //console.log(this.todoModel, this.todoModel.todo, this.todoModel.priority);
    if(this.todoModel.todo!=="" && this.todoModel.priority !==""){
      this.todoArray.push(this.todoModel);
      console.log(this.todoArray);
      this.displaytodo();
      //this.todoForm.resetForm();
     } else{
       alert("The field is required.")
     }
     //console.log(this.todoArray);
  }


  /*delete item*/
  /* deleteItem(todo){
  	for(let i=0 ;i<= this.todoArray.length ;i++){
  		if(todo== this.todoArray[i]){
  			this.todoArray.splice(i,1)
  		}
  	}
  } */

  // submit Form
  /* todoSubmit(value:any){
     if(value!==""){
    this.todoArray.push(value.todo)
     //this.todoForm.reset()
    }else{
      alert('Field required **')
    }
  } */

  

}
