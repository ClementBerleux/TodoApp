import { Component, Input } from '@angular/core';

@Component({
  selector: 'compo-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() numero: number = 0
}
