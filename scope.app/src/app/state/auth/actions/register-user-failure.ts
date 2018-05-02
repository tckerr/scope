import {Action} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {createActionType} from '../../shared/utils';

export const REGISTER_USER_FAILURE = createActionType('REGISTER_USER_FAILURE');

export class RegisterUserFailure implements Action {
    readonly type = REGISTER_USER_FAILURE;

    constructor(public payload: HttpErrorResponse) {
    }
}
