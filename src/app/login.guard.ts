import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './login/auth/auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  if (!inject(AuthService).isAuthenticated()) {
    inject(Router).navigate(['login'])
    return false;
  }
  return true;
};
