import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  private verificato = false;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!this.verificato) {
      this.verificato = true;
      return this.auth.verifyToken(token);
    } else {
      return of(true); // Token verification already done, allow navigation
    }
  }
}
