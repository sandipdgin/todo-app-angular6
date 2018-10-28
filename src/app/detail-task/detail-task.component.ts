import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})
export class DetailTaskComponent implements OnInit {
  public taskId;
  private _currentTask;
  todoArray$ = [];

  //@Output('hideTabs') hidetabs = new EventEmitter<boolean>();

  constructor(private todoService:TodoServiceService, private route: ActivatedRoute) { 
    this.todoArray$ = this.todoService.filterTasks(null);
    //this.hidetabs.emit(false);
  }

  ngOnInit() {    
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.taskId = id;
      console.log("current task 1", id);
    })
    this._currentTask = this.todoArray$.find(obj => obj.id == this.taskId );
    console.log("current task", this._currentTask);
  }

}
