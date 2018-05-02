import {createFeatureSelector} from '@ngrx/store';
import {AuthState} from '../reducers';

export const getAuthState = createFeatureSelector<AuthState>('auth');
