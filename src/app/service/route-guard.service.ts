import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';



@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private authentication:AuthenticationService,private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(this.authentication.isUserLoggedIn() || this.authentication.isOwnerLoggedIn()){
      return true;
    }
    else{

      // if user is not logged in redirecting him to login page


      this.router.navigate(['']);
      return false;
    }
  }
}