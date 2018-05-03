import {createActionType} from '../../shared/utils';
import {Action} from '@ngrx/store';

export const LOGOUT = createActionType('LOGOUT');

export class Logout implements Action {
    readonly type = LOGOUT;
}
