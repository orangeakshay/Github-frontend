import { Injectable } from '@angular/core';
import {  Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import {KeycloakService} from 'keycloak-angular';


@Injectable()
export class LandingGuard implements CanActivate {

  constructor( public router: Router,private keycloakService: KeycloakService  ) {
  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    const tokenValue = JSON.parse(localStorage.getItem('currentUserTokenRDL'));
    if (tokenValue && tokenValue.authenticated){
        this.router.navigateByUrl('/dashboard');
    }else{
      return true;
    }
  }
}
