import {createActionType} from '../../shared/utils';
import {Action} from '@ngrx/store';

export const CLEAR_ORGANIZATIONS_DATA = createActionType('CLEAR_ORGANIZATIONS_DATA');

export class ClearOrganizationsData implements Action {
    readonly type = CLEAR_ORGANIZATIONS_DATA;
}
