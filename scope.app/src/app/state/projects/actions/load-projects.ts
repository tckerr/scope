import {createActionType} from '../../shared/utils';
import {Action} from '@ngrx/store';

export const LOAD_PROJECTS = createActionType('LOAD_PROJECTS');

export class LoadProjects implements Action {
    readonly type = LOAD_PROJECTS;
}
