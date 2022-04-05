import { Injectable } from '@angular/core';
import {  Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import {KeycloakService} from 'keycloak-angular';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor( public router: Router, private keycloakService: KeycloakService ) {
  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    const url: string = state.url;
    return this.checkLogin( url );
  }

  checkLogin( url: string ): boolean {
    if ( this.keycloakService.isLoggedIn() && this.keycloakService.getKeycloakInstance().authenticated ) {
      return true;

    } else {
      this.keycloakService.login();
      return false;
    }
  }

}
