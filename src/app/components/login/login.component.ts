import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'compo-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  public constructor(public authService: AuthService) { }
}
