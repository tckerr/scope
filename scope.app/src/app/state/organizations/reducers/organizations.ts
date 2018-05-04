import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {OrganizationsAction} from '../actions/organizations-action';
import {LOAD_ORGANIZATIONS} from '../actions/load-organizations';
import {LOAD_ORGANIZATIONS_SUCCESS} from '../actions/load-organizations-success';
import {Organization} from '../models/organization';
import {CLEAR_ORGANIZATIONS_DATA} from '../actions/clear-data';
import {SET_ACTIVE_ORGANIZATION_ID} from '../actions/set-active-organization-id';

export interface State extends EntityState<Organization> {
    activeOrganizationId: number;
}

export const adapter: EntityAdapter<Organization> = createEntityAdapter();

const initialState: State = adapter.getInitialState({
    activeOrganizationId: null
});

export function reducer(state: State = initialState, action: OrganizationsAction) {
    switch (action.type) {
        case LOAD_ORGANIZATIONS:
            return adapter.removeAll(state);
        case LOAD_ORGANIZATIONS_SUCCESS:
            return adapter.addMany(action.payload, state);
        case CLEAR_ORGANIZATIONS_DATA:
            return adapter.removeAll(state);
        case SET_ACTIVE_ORGANIZATION_ID:
            return { ...state, activeOrganizationId: action.payload.id };
        default:
            return state;
    }
}
