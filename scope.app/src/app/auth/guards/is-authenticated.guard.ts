import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthState} from '../../state/auth/reducers';
import {Store} from '@ngrx/store';
import {getIsAuthenticated} from '../../state/auth/selectors/get-is-authenticated';

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
