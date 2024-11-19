import { Component } from '@angular/core';
import { Event, Router, RouterOutlet, NavigationEnd } from '@angular/router';

import { IStaticMethods } from 'preline/preline';
import { TaskComponent } from "./components/task/task.component";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

interface Task {
  name: string
  completed: boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public tasks: Task[] = [
    { name: "Définir un projet", completed: true },
    { name: "Construire une maquette", completed: false },
    { name: "Coder l'application", completed: false }
  ]

  public nombreTasksCompleted: number = 1;

  public calculTasksCompleted(nombre: number) {
    this.nombreTasksCompleted += nombre
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
