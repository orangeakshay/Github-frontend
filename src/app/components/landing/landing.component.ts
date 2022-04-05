import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';
import {environment} from '../../../environments/environment';
import {UserService} from "../../services/auth.service";
import {Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DialogDataExampleDialog} from "./DialogDataExampleDialog";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  repos = [];
  constructor(public dialog: MatDialog,private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllRepositories().subscribe((response)=>{
      this.repos = response;
    })
  }
  geDetail = (name,repo) => {
    this.userService.getRepositoryDetail(name,repo).subscribe((response)=>{
      this.openDialog(response);
    //  this.repos = response;
    })
  }
  openDialog(response:any) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        response
      },
      height: '800px',
      width: '1200px',
    });
  }
}
