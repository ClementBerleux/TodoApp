import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: boolean = false

  public login(): void {
    setTimeout(() => this.isAuth = true, 1000)
    this.router.navigate(['todo'])
  }

  public logout(): void {
    setTimeout(() => this.isAuth = false, 1000)
    this.router.navigate([''])
  }

  constructor(public router: Router) { }
}
