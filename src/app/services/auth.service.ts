import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: boolean = false

  constructor(public router: Router) { }

  public login(): void {
    setTimeout(() => this.isAuth = true, 1000)
    this.router.navigate(['todo/1'])
  }

  public logout(): void {
    setTimeout(() => this.isAuth = false, 1000)
    this.router.navigate([''])
  }
}
