import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'compo-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styles: ``
})
export class LogoutComponent {

  public constructor(public authService: AuthService) { }

}
