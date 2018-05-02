import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
    RegisterUserFailure} from '../actions/register-user-failure';
import {AuthApi} from '../../../auth/services/auth-api.service';
import {of} from 'rxjs/observable/of';
import * as RouterActions from './../../router/actions/router';
import {TokenStorageService} from '../../../auth/services/token-storage.service';
import {
    GENERATE_TOKEN,
    GenerateToken} from '../actions/generate-token';
import {GENERATE_TOKEN_SUCCESS, GenerateTokenSuccess} from '../actions/generate-token-success';
import {GenerateTokenFailure} from '../actions/generate-token-failure';
import {CLEAR_TOKEN} from '../actions/clear-token';
import {RESUME_SESSION, ResumeSession} from '../actions/resume-session';
import {REGISTER_USER, RegisterUser} from '../actions/register-user';
import {REGISTER_USER_SUCCESS, RegisterUserSuccess} from '../actions/register-user-success';

@Injectable()
export class AuthEffects {

    @Effect()
    generateToken: Observable<Action> = this.actions
        .ofType<GenerateToken>(GENERATE_TOKEN)
        .pipe(
            switchMap((action) => this.authApi.fetchToken(action.payload).pipe(
                map(token => new GenerateTokenSuccess({token: token})),
                catchError(err => of(new GenerateTokenFailure({response: err})))
            )),
        );

    @Effect()
    registerUser: Observable<Action> = this.actions
        .ofType<RegisterUser>(REGISTER_USER)
        .pipe(
            switchMap((action) => this.authApi.registerUser(action.payload).pipe(
                map(() => new RegisterUserSuccess()),
                catchError(err => of(new RegisterUserFailure(err)))
            )),
        );

    @Effect()
    clearTokenAndRedirectOnLogout: Observable<Action> = this.actions
        .ofType<GenerateToken>(CLEAR_TOKEN)
        .do(() => this.tokenStorage.clearToken())
        .switchMap(() => of(new RouterActions.Go({path: ['/login']})));

    @Effect()
    storeTokenAndRedirectToProjectsOnLogin: Observable<Action> = this.actions
        .ofType<GenerateTokenSuccess>(GENERATE_TOKEN_SUCCESS)
        .do(action => this.tokenStorage.addToken(action.payload.token))
        .switchMap(() => of(new RouterActions.Go({path: ['/projects']})));

    @Effect()
    redirectToProjectsOnResumedSession: Observable<Action> = this.actions
        .ofType<ResumeSession>(RESUME_SESSION)
        .pipe(
            switchMap(() => of(new RouterActions.Go({path: ['/projects']}))),
        );

    @Effect()
    redirectToLoginOnRegister: Observable<Action> = this.actions
        .ofType<RegisterUserSuccess>(REGISTER_USER_SUCCESS)
        .switchMap(() => of(new RouterActions.Go({path: ['/login']})));

    constructor(private actions: Actions,
                private authApi: AuthApi,
                private tokenStorage: TokenStorageService) {
    }
}
