import {createActionType} from '../../shared/utils';
import {Action} from '@ngrx/store';

export const LOAD_ORGANIZATIONS = createActionType('LOAD_ORGANIZATIONS');

export class LoadOrganizations implements Action {
    readonly type = LOAD_ORGANIZATIONS;
}
