import { Component, OnInit } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {MENUITEMS} from '../../constants/menu';
import {Router} from '@angular/router';
import {UserModel} from '../../models/user.model';
import {UserService} from '../../services/auth.service';
import {PERMISSIONS} from '../../constants/constants';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus = MENUITEMS;
  user = '';
  filteredMenus: any = [];
  currentUser: UserModel;

  constructor(private userService: UserService, private keycloakService: KeycloakService, private  router: Router) { }

  ngOnInit(): void {

  }

  pushElementsToStart(arr, fromIndex, toIndex) {
    const element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    return arr;
  }
  private initializeUserOptions(): void {
    this.user = this.keycloakService.getUsername();
  }

  logout(): void {
  }

}
