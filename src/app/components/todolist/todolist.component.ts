import { Component } from '@angular/core';
import { TodolistService } from '../../services/todolist.service';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../class/task.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'compo-todolist',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './todolist.component.html',
})
export class TodolistComponent {
  public tasks: Task[] = [];
  private subscription: Subscription = new Subscription();

  constructor(public todolistService: TodolistService) {
    this.getTasks();
  }

  public getTasks() {
    this.subscription.add(
      this.todolistService
        .getTasks()
        .subscribe((tasks) => (this.tasks = tasks)),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
