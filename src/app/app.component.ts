import { Component } from '@angular/core';
import { TodoServiceService } from './todo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todoArray$ = [];
  filterTodoArray$ = [];

  constructor(private todoService:TodoServiceService, private router: Router) { 
    this.todoArray$ = this.todoService.getAllTasks();
  }

  onSelect(task){
    this.router.navigate(['/task', task.id]);
  }
  getTasksList(x){
    if( x != "all" ){
      this.todoArray$ = this.todoService.filterRedTasks(x);
    } else {
      this.todoArray$ = this.todoService.getAllTasks();
    }
    return this.todoArray$;    
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
