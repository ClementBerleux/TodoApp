import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TodolistService } from '../../services/todolist.service';

@Component({
  selector: 'compo-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styles: ``,
})
export class TaskFormComponent {
  public title: string = '';
  public description: string = '';

  constructor(
    public location: Location,
    public router: Router,
    public todolistService: TodolistService,
  ) {}

  public onSubmit() {
    this.todolistService.createTask(this.title, this.description);
    this.router.navigate(['todos']);
  }
}
