import * as fromAuth from './auth';

export interface AuthState {
    auth: fromAuth.State;
}

export const reducers = {
    auth: fromAuth.reducer
};











