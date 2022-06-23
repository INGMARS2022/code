import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarDashboardGuard implements CanActivate, CanLoad {
  constructor(
    private authService:AuthService,
    private route:Router
    ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.validarToken()
      .pipe(
        tap( valid => {
          if(valid){}else{this.route.navigateByUrl('error')}
        })
      );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.validarToken()
      .pipe(
        tap( valid => {
          if(valid){}else{this.route.navigateByUrl('error')}
        })
      );
  }
}
