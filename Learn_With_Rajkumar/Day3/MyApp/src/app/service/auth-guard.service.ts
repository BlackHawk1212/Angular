import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let authStatus = sessionStorage.getItem("auth");

    if(authStatus == "true") {
      return true;
    } else {
      alert("Invalid Session, Redirecting...");
      this.route.navigate(['/login']);
      return false;
    }
  }
}
