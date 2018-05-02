import {createSelector} from '@ngrx/store';
import {getAuthState} from './get-auth-state';

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
