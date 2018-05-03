import {createActionType} from '../../shared/utils';
import {Action} from '@ngrx/store';

export const CLEAR_PROJECTS_DATA = createActionType('CLEAR_PROJECTS_DATA');

export class ClearProjectsData implements Action {
    readonly type = CLEAR_PROJECTS_DATA;
}
