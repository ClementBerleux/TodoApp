import { Component } from '@angular/core';
import { Event, Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { IStaticMethods } from 'preline/preline';
import { TaskComponent } from "./components/task/task.component";
import { tasks, Task } from './class/task.model';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public tasks: Task[] = tasks

  public nombreTasksCompleted: number = tasks.filter((tache) => tache.completed).length;

  public calculTasksCompleted(completed: boolean): void {
    if (completed) this.nombreTasksCompleted++
    else this.nombreTasksCompleted--
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }
}
