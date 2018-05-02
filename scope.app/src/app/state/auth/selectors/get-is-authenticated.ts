import {createSelector} from '@ngrx/store';
import {getAuthState} from './get-auth-state';

export const getIsAuthenticated = createSelector(
    getAuthState,
    (state) => state.auth.token != null
);
