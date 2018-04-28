import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthTokenStorage} from '../services/auth-token-storage.service';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {

    constructor(private tokenStorage: AuthTokenStorage, private router: Router) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const authenticated = this.tokenStorage.isAuthenticated();
        if (!authenticated) {
            this.router.navigate(['/login']);
        }
        return authenticated;
    }
}
