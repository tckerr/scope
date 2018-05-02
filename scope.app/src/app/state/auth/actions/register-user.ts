import {Action} from '@ngrx/store';
import {UserRegistrationData} from '../models/user-registration-data';
import {createActionType} from '../../shared/utils';

export const REGISTER_USER = createActionType('REGISTER_USER');

export class RegisterUser implements Action {
    readonly type = REGISTER_USER;

    constructor(public payload: UserRegistrationData) {
    }
}
