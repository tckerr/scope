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
