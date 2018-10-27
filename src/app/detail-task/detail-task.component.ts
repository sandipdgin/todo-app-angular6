import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})
export class DetailTaskComponent implements OnInit {
  public taskId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.taskId = id;
  }

}
