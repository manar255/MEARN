import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authenticationService = inject(AuthenticationService)

  let isLogin=authenticationService.isLogin;
 
 
  if (isLogin) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
