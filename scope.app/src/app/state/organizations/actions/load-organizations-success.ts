import {Action} from '@ngrx/store';
import {createActionType} from '../../shared/utils';
import {Organization} from '../models/organization';

export const LOAD_ORGANIZATIONS_SUCCESS = createActionType('LOAD_ORGANIZATIONS_SUCCESS');

export class LoadOrganizationsSuccess implements Action {
    readonly type = LOAD_ORGANIZATIONS_SUCCESS;

    constructor(public payload: Organization[]) {
    }
}
