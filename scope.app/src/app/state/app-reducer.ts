import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {AppState} from './app-state';
import {routerReducer} from '@ngrx/router-store';
import {storeFreeze} from 'ngrx-store-freeze';

export const appReducer: ActionReducerMap<AppState> = {
    router: routerReducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function(state: AppState, action: any): AppState {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const appMetaReducers: MetaReducer<AppState>[] = [logger, storeFreeze];
