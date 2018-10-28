import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'filter-task',
  templateUrl: './filter-task.component.html',
  styleUrls: ['./filter-task.component.css']
})
export class FilterTaskComponent implements OnInit, OnDestroy {

  todoArray$ = [];
  public taskClr;

  constructor(private todoService:TodoServiceService, private router: Router, private route: ActivatedRoute) { 

    this.route.paramMap.subscribe((params: ParamMap) => {
      let clr = params.get('priority');
      this.taskClr = clr;
      this.todoArray$ = this.todoService.filterTasks(this.taskClr);
    })
  }

  ngOnInit() {
    this.todoArray$ = this.todoService.filterTasks(this.taskClr);
  }

  ngOnDestroy() {
    this.todoArray$ = null;
    this.taskClr = null;
  }
  onSelect(task){
    this.router.navigate(['/task', task.id]);
  }

  

}
