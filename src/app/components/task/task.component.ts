import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'compo-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() public numero?: number
  @Input() public name?: string
  @Input() public completed: boolean = false
  @Output() complete = new EventEmitter<number>();

  public getComplete(): string {
    if (this.completed) return "terminée"
    else return "en cours"
  }

  public toggleCompleted(): void {
    this.completed = !this.completed
    if (this.completed) this.complete.emit(1)
    else this.complete.emit(-1)
  }

  public getButtonText(): string {
    if (this.completed) return "Annuler"
    else return "Terminer"
  }

  public send() {

    if (this.completed) this.complete.emit(1)
    else this.complete.emit(-1)
  }
}
