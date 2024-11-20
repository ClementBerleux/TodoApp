import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../class/task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'compo-task',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() public task: Task = new Task()
  @Output() complete: EventEmitter<boolean> = new EventEmitter<boolean>()

  public getComplete(): string {
    if (this.task.completed) return "terminée"
    else return "en cours"
  }

  public toggleCompleted(): void {
    this.task.completed = !this.task.completed
    this.complete.emit(this.task.completed)
  }

  public getButtonText(): string {
    if (this.task.completed) return "Annuler"
    else return "Terminer"
  }
}
