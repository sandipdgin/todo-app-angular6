import { Component } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  todoArray$ = [];

  constructor(private todoService:TodoServiceService, private router: Router) { 
    this.todoArray$ = this.todoService.filterTasks(null);
  }

  onSelect(task){
    this.router.navigate(['/task', task.id]);
  }


}
