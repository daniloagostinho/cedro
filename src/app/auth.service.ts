import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isAuthenticated() {
    // get the auth token from localStorage
    let token = localStorage.getItem('access_token');

    // check if token is set, then...
    if (token) {
        return true;
    }

    return false;
  }
}