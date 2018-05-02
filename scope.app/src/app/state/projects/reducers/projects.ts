import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Project} from '../../../project/models/project';
import {LOAD_PROJECTS, LOAD_PROJECTS_SUCCESS, ProjectsAction, SELECT_PROJECT} from '../actions/projects';

export interface State extends EntityState<Project> {
    selectedProjectId: number;
}

export const adapter: EntityAdapter<Project> = createEntityAdapter();

const initialState: State = adapter.getInitialState({
    selectedProjectId: null
});

export function reducer(state: State = initialState, action: ProjectsAction) {
    switch (action.type) {
        case LOAD_PROJECTS:
            return adapter.removeAll(state);
        case LOAD_PROJECTS_SUCCESS:
            return adapter.addMany(action.payload, state);
        case SELECT_PROJECT:
            return { ...state, selectedProjectId: action.payload.id };
        default:
            return state;
    }
}

export const getSelectedProjectId = (state: State) => state.selectedProjectId;
