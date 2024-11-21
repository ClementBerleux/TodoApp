import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { LogoutComponent } from "../logout/logout.component";

@Component({
  selector: 'compo-nav',
  standalone: true,
  imports: [LoginComponent, LogoutComponent],
  templateUrl: './nav.component.html',
  styles: ``
})
export class NavComponent {

}
