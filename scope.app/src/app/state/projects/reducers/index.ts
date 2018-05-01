import * as fromProjects from './projects';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../../app-state';

export interface ProjectsState {
    projects: fromProjects.State;
}

export interface State extends AppState {
    projects: ProjectsState
}

export const reducers = {
    projects: fromProjects.reducer
};

export const getProjectsState = createFeatureSelector<ProjectsState>('projects');

export const getProjectsEntityState = createSelector(
    getProjectsState,
    (state) => state.projects
);

export const {
    selectAll: getAllProjects,
    selectEntities: getProjectEntities,
    selectIds: getProjectIds,
    selectTotal: getProjectsTotal
} = fromProjects.adapter.getSelectors(getProjectsEntityState);

export const getSelectedProjectId = createSelector(
    getProjectsEntityState,
    fromProjects.getSelectedProjectId
);

export const getSelectedPower = createSelector(
    getProjectEntities,
    getSelectedProjectId,
    (entities, selectedProjectId) => selectedProjectId && entities[selectedProjectId]
);
