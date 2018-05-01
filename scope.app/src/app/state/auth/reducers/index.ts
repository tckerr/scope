import * as fromAuth from './auth';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../../app-state';

export interface AuthState {
    auth: fromAuth.State;
}

export interface State extends AppState {
    auth: AuthState
}

export const reducers = {
    auth: fromAuth.reducer
};

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getAuthToken = createSelector(
    getAuthState,
    (state) => state.auth.token
);

export const getIsGeneratingToken = createSelector(
    getAuthState,
    (state) => state.auth.loginProcess.isGeneratingToken
);

const _getAuthStateLoginErrors = createSelector(
    getAuthState,
    state => {
        return state.auth.loginProcess.errorResponse && state.auth.loginProcess.errorResponse.error || {};
    }
);

export const getAuthLoginGeneralErrors = createSelector(
    _getAuthStateLoginErrors,
    (error) => error.non_field_errors || []
);

export const getAuthLoginUsernameErrors = createSelector(
    _getAuthStateLoginErrors,
    (error) => error.username || []
);


export const getAuthLoginPasswordErrors = createSelector(
    _getAuthStateLoginErrors,
    (error) => error.password || []
);
