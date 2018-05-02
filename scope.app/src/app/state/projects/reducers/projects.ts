import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Project} from '../../../project/models/project';
import {ProjectsAction} from '../actions/projects-action';
import {LOAD_PROJECTS} from '../actions/load-projects';
import {LOAD_PROJECTS_SUCCESS} from '../actions/load-projects-success';

export interface State extends EntityState<Project> {
}

export const adapter: EntityAdapter<Project> = createEntityAdapter();

const initialState: State = adapter.getInitialState({
});

export function reducer(state: State = initialState, action: ProjectsAction) {
    switch (action.type) {
        case LOAD_PROJECTS:
            return adapter.removeAll(state);
        case LOAD_PROJECTS_SUCCESS:
            return adapter.addMany(action.payload, state);
        default:
            return state;
    }
}
