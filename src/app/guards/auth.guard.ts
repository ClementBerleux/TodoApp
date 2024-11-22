import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let ok = inject(AuthService).isAuth;
  let router = inject(Router);
  if (!ok) router.navigate(['']);
  return ok;
};
