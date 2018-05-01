import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {GENERATE_TOKEN, GENERATE_TOKEN_SUCCESS, GenerateToken, GenerateTokenFailure, GenerateTokenSuccess} from '../actions/auth';
import {AuthApi} from '../../../auth/services/auth-api.service';
import {of} from 'rxjs/observable/of';
import * as RouterActions from './../../router/actions/router';
import {AuthTokenStorage} from '../../../auth/services/auth-token-storage.service';

@Injectable()
export class AuthEffects {
    @Effect()
    loadProjects: Observable<Action> = this.actions
        .ofType<GenerateToken>(GENERATE_TOKEN)
        .pipe(
            switchMap((action) => this.authApi.fetchToken(action.payload).pipe(
                map(token => {
                    // TODO: move to store and initialize from this
                    this.tokenStorage.setToken(token);
                    return new GenerateTokenSuccess({token: token})
                }),
                catchError((err, obs) => of(new GenerateTokenFailure({response: err})))
            )),
        );

    @Effect()
    redirectToProjects: Observable<Action> = this.actions
        .ofType<GenerateTokenSuccess>(GENERATE_TOKEN_SUCCESS)
        .pipe(
            switchMap(() => of(new RouterActions.Go({path: ['/projects']}))),
        );

    constructor(private actions: Actions,
                private authApi: AuthApi,
                private tokenStorage: AuthTokenStorage) {
    }
}
