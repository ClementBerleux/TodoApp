import { Component } from '@angular/core';
import { TodolistService } from '../../services/todolist.service';
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'compo-todolist',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './todolist.component.html'
})
export class TodolistComponent {

  constructor(public todolistService: TodolistService) {
  }

}
