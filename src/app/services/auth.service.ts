import { Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/user.model';
import { map } from 'rxjs/operators';
import {LeadsModel} from "../models/leads.model";

@Injectable()
export class UserService{

  constructor(private http: HttpClient) {
  }

  getAllRepositories() {
    return this.http.get(environment.apiUrl ).pipe(
      map((user: any) => {
        return user;
      })
    );
  }

  getRepositoryDetail(username:any,repoName:any) {
    return this.http.get(environment.apiUrl2 +'?username='+ username+ '&reponame=' +repoName  ).pipe(
        map((user: any) => {
          return user;
        })
    );
  }



}

