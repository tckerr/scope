import {createActionType} from '../../shared/utils';
import {Action} from '@ngrx/store';
import {Project} from '../../../project/models/project';


export const LOAD_PROJECTS = createActionType('LOAD_PROJECTS');
export const LOAD_PROJECTS_SUCCESS = createActionType('LOAD_PROJECTS_SUCCESS');
export const SELECT_PROJECT = createActionType('SELECT_PROJECT');

export class LoadProjects implements Action {
    readonly type = LOAD_PROJECTS;
}

export class LoadProjectsSuccess implements Action {
    readonly type = LOAD_PROJECTS_SUCCESS;

    constructor(public payload: Project[]) {
    }
}

export class SelectProject implements Action {
    readonly type = SELECT_PROJECT;

    constructor(public payload: { id: number }) {
    }
}

export type ProjectsAction = LoadProjects | LoadProjectsSuccess | SelectProject;
