import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: boolean = false

  public login(): void {
    setTimeout(() => this.isAuth = true, 1000)
  }

  public logout(): void {
    setTimeout(() => this.isAuth = false, 1000)
  }

  constructor() { }
}
