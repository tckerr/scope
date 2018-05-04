import {Action} from '@ngrx/store';
import {createActionType} from '../../shared/utils';

export const SET_ACTIVE_ORGANIZATION_ID = createActionType('SET_ACTIVE_ORGANIZATION_ID');

export class SetActiveOrganizationId implements Action {
    readonly type = SET_ACTIVE_ORGANIZATION_ID;

    constructor(public payload: {id: number}) {
    }
}
