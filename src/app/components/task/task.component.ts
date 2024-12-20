import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../class/task.model';
import { DatePipe } from '@angular/common';
import { TodolistService } from '../../services/todolist.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'compo-task',
  standalone: true,
  imports: [FormsModule, DatePipe, RouterLink],
  templateUrl: './task.component.html'
})
export class TaskComponent {
  @Input() public task: Task = new Task()
  // @Output() complete: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private todolistService: TodolistService, public router: Router) { }

  public getComplete(): string {
    if (this.task.completed) return "terminée"
    else return "en cours"
  }

  public toggleCompleted(): void {
    this.todolistService.toggleCompleted(this.task.id)
    // this.task.completed = !this.task.completed
    // this.complete.emit(this.task.completed)
  }

  public getButtonText(): string {
    if (this.task.completed) return "Annuler"
    else return "Terminer"
  }
}
