import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {AuthState, getAuthToken, getIsAuthenticated} from '../../state/auth/reducers';
import {Store} from '@ngrx/store';
import {NotAuthenticatedError} from '../../auth/errors/not-authenticated-error';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticatedApi {

    constructor(private store: Store<AuthState>) {
    }

    protected getHeaders(): Observable<HttpHeaders> {
        return this.store
            .select(getIsAuthenticated)
            .flatMap(isAuthenticated => {
                if (!isAuthenticated) {
                    throw new NotAuthenticatedError('Cannot make authenticated API request: no token found in store');
                }
                return this.store.select(getAuthToken);
            })
            .map(token => {
                if (token == null) {
                    throw new NotAuthenticatedError('Cannot make authenticated API request: token is null');
                }
                return new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                });
            })
    }

}
