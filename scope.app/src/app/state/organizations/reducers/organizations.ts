import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {OrganizationsAction} from '../actions/organizations-action';
import {LOAD_ORGANIZATIONS} from '../actions/load-organizations';
import {LOAD_ORGANIZATIONS_SUCCESS} from '../actions/load-organizations-success';
import {Organization} from '../models/organization';

export interface State extends EntityState<Organization> {
}

export const adapter: EntityAdapter<Organization> = createEntityAdapter();

const initialState: State = adapter.getInitialState({});

export function reducer(state: State = initialState, action: OrganizationsAction) {
    switch (action.type) {
        case LOAD_ORGANIZATIONS:
            return adapter.removeAll(state);
        case LOAD_ORGANIZATIONS_SUCCESS:
            return adapter.addMany(action.payload, state);
        default:
            return state;
    }
}
