import * as fromOrg from './organizations';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../../app-state';

export interface OrganizationsState {
    projects: fromOrg.State;
}

export interface State extends AppState {
    projects: OrganizationsState
}

export const reducers = {
    projects: fromOrg.reducer
};

export const getOrganizationsState = createFeatureSelector<OrganizationsState>('organizations');

export const getOrganizationsEntityState = createSelector(
    getOrganizationsState,
    (state) => state.projects
);

export const {
    selectAll: getAllOrgs,
    selectEntities: getOrgEntities,
    selectIds: getOrgIds,
    selectTotal: getOrgTotal
} = fromOrg.adapter.getSelectors(getOrganizationsEntityState);
