import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthState, getIsAuthenticated} from '../../state/auth/reducers';
import {Store} from '@ngrx/store';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {

    constructor(private store: Store<AuthState>) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.store.select(getIsAuthenticated);
    }
}
