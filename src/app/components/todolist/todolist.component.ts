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

  public nombreTasksCompleted: number

  public calculTasksCompleted(completed: boolean): void {
    if (completed) this.nombreTasksCompleted++
    else this.nombreTasksCompleted--
  }

  constructor(public todolistService: TodolistService) {
    this.nombreTasksCompleted = this.todolistService.tasks.filter((tache) => tache.completed).length
  }

}
