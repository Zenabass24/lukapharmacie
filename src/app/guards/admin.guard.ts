import { CanActivateFn, Router } from '@angular/router';

export const AdminGuard: CanActivateFn = (route, state) => {
  const token = JSON.parse(Object(window.localStorage.getItem('token')))
  
  if ( token.role == 'DEV' || token.role == 'ADMIN') {
    return true
  } else {
    let router = new Router()
    router.navigate(['/gestion'])
    return false;
  }
};
