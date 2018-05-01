import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {GENERATE_TOKEN, GenerateToken, GenerateTokenFailure, GenerateTokenSuccess} from '../actions/auth';
import {AuthApi} from '../../../auth/services/auth-api.service';
import {of} from 'rxjs/observable/of';

@Injectable()
export class AuthEffects {
    @Effect()
    loadProjects: Observable<Action> = this.actions
        .ofType<GenerateToken>(GENERATE_TOKEN)
        .pipe(
            switchMap((action) => this.authApi.fetchToken(action.payload)),
            map(token => new GenerateTokenSuccess({token: token})),
            catchError((err, obs) => of(new GenerateTokenFailure({errors: err}))),
        );

    constructor(private actions: Actions,
                private authApi: AuthApi) {
    }
}
