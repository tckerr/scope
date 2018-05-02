import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
    CLEAR_TOKEN,
    GENERATE_TOKEN,
    GENERATE_TOKEN_SUCCESS,
    GenerateToken,
    GenerateTokenFailure,
    GenerateTokenSuccess,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    RegisterUser,
    RegisterUserFailure,
    RegisterUserSuccess, RESUME_SESSION, ResumeSession
} from '../actions/auth';
import {AuthApi} from '../../../auth/services/auth-api.service';
import {of} from 'rxjs/observable/of';
import * as RouterActions from './../../router/actions/router';
import {TokenStorageService} from '../../../auth/services/token-storage.service';

@Injectable()
export class AuthEffects {

    @Effect()
    loadProjects: Observable<Action> = this.actions
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
    clearTokenAndRedirectAfterLogout: Observable<Action> = this.actions
        .ofType<GenerateToken>(CLEAR_TOKEN)
        .do(action => this.tokenStorage.clearToken())
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
