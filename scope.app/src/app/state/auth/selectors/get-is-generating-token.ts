import {createSelector} from '@ngrx/store';
import {getAuthState} from './get-auth-state';

export const getIsGeneratingToken = createSelector(
    getAuthState,
    (state) => state.auth.loginProcess.isGeneratingToken
);
