import { Component } from '@angular/core';
import { Event, Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { IStaticMethods } from 'preline/preline';
import { NavComponent } from './components/nav/nav.component';
import { TodolistComponent } from "./components/todolist/todolist.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, TodolistComponent, LoginComponent, LogoutComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private router: Router) {
  }

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
