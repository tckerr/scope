import {createSelector} from '@ngrx/store';
import {getAuthState} from './get-auth-state';

export const getAuthToken = createSelector(
    getAuthState,
    (state) => state.auth.token
);
