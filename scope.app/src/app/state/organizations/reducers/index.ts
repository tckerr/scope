import * as fromOrg from './organizations';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../../app-state';

export interface OrgState {
    projects: fromOrg.State;
}

export interface State extends AppState {
    projects: OrgState
}

export const reducers = {
    projects: fromOrg.reducer
};

export const getOrganizationsState = createFeatureSelector<OrgState>('organizations');

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
