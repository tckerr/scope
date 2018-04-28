import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthTokenStorage} from '../services/auth-token-storage.service';

@Injectable()
export class IsAnonymousGuard implements CanActivate {
    constructor(private tokenStorage: AuthTokenStorage, private router: Router) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const anonymous = !this.tokenStorage.isAuthenticated();
        if (!anonymous) {
            this.router.navigate(['/projects']);
        }
        return anonymous;
    }
}
