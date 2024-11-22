import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth: boolean = false;

  constructor(public router: Router) {}

  public login(): void {
    setTimeout(() => {
      this.isAuth = true;
      this.router.navigate(['/todos']);
    }, 500);
    // this.router.navigate([''])
  }

  public logout(): void {
    setTimeout(() => {
      this.isAuth = false;
      this.router.navigate(['']);
    }, 500);
    // this.router.navigate([''])
  }
}
