import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../class/task.model';
import { DatePipe, Location } from '@angular/common';
import { TodolistService } from '../../services/todolist.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'compo-taskdetails',
  standalone: true,
  imports: [FormsModule, DatePipe, RouterLink],
  templateUrl: './taskdetails.component.html',
  styles: ``
})
export class TaskdetailsComponent {

  public task: Task | undefined

  constructor(private route: ActivatedRoute, public location: Location, public todolistService: TodolistService) {
  }

  ngOnInit() {
    // const taskId = this.route.snapshot.paramMap.get('id') // route statique
    // if (taskId) this.task = this.todolistService.getTaskById(parseInt(taskId))
    this.route.paramMap.subscribe((params) => this.task = this.todolistService.getTaskById(Number(params.get('id'))))
  }

  public getComplete(): string {
    if (this.task?.completed) return "terminée"
    else return "en cours"
  }

  public toggleCompleted(): void {
    if (this.task) this.todolistService.toggleCompleted(this.task.id)
    // this.task.completed = !this.task.completed
    // this.complete.emit(this.task.completed)
  }

  public getButtonText(): string {
    if (this.task?.completed) return "Annuler"
    else return "Terminer"
  }
}
