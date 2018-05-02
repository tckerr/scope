import {Action} from '@ngrx/store';
import {createActionType} from '../../shared/utils';

export const REGISTER_USER_SUCCESS = createActionType('REGISTER_USER_SUCCESS');

export class RegisterUserSuccess implements Action {
    readonly type = REGISTER_USER_SUCCESS;
}
