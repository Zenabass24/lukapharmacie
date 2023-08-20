import { CanActivateFn } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  if (window.localStorage.getItem('token')) {
    return true
  } else {
    return false;
  }
};
