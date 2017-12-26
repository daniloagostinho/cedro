import { AuthService } from './auth.service';
import { Injectable }  from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  base_url: string;

  constructor(
    private authService: AuthService,
    private router: Router) {}

  canActivate() {
        // Check to see if a user has a valid token
        if (this.authService.isAuthenticated()) {
            // If they do, return true and allow the user to load app
            return true;
        }

        // If not, they redirect them to the login page
        this.router.navigate(['/401']);
        return false;
    }

}
