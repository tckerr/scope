import {Action} from '@ngrx/store';
import {Project} from '../../../project/models/project';
import {createActionType} from '../../shared/utils';

export const LOAD_PROJECTS_SUCCESS = createActionType('LOAD_PROJECTS_SUCCESS');

export class LoadProjectsSuccess implements Action {
    readonly type = LOAD_PROJECTS_SUCCESS;

    constructor(public payload: Project[]) {
    }
}
