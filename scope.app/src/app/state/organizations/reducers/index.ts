import * as fromOrg from './organizations';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../../app-state';

export interface OrgState {
    organizations: fromOrg.State;
}

export interface State extends AppState {
    organizations: OrgState
}

export const reducers = {
    organizations: fromOrg.reducer
};

export const getOrganizationsState = createFeatureSelector<OrgState>('organizations');

export const getOrganizationsEntityState = createSelector(
    getOrganizationsState,
    (state) => state.organizations
);

export const getActiveOrganizationId = createSelector(
    getOrganizationsEntityState,
    state => state.activeOrganizationId
);

export const getActiveOrganization = createSelector(
    getOrganizationsState,
    getActiveOrganizationId,
    (state, activeId) => state.organizations.entities[activeId]
);

export const {
    selectAll: getAllOrgs,
    selectEntities: getOrgEntities,
    selectIds: getOrgIds,
    selectTotal: getOrgTotal
} = fromOrg.adapter.getSelectors(getOrganizationsEntityState);
