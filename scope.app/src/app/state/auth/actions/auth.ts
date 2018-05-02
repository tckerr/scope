import {createActionType} from '../../shared/utils';
import {Action} from '@ngrx/store';
import {Credentials} from '../../../auth/models/credentials';
import {HttpErrorResponse} from '@angular/common/http';
import {UserRegistrationData} from '../models/user-registration-data';

export const GENERATE_TOKEN = createActionType('GENERATE_TOKEN');
export const GENERATE_TOKEN_SUCCESS = createActionType('GENERATE_TOKEN_SUCCESS');
export const GENERATE_TOKEN_FAILURE = createActionType('GENERATE_TOKEN_FAILURE');
export const RESUME_SESSION = createActionType('RESUME_SESSION');
export const CLEAR_TOKEN = createActionType('CLEAR_TOKEN');
export const REGISTER_USER = createActionType('REGISTER_USER');
export const REGISTER_USER_SUCCESS = createActionType('REGISTER_USER_SUCCESS');
export const REGISTER_USER_FAILURE = createActionType('REGISTER_USER_FAILURE');

export class GenerateToken implements Action {
    readonly type = GENERATE_TOKEN;

    constructor(public payload: Credentials) {
    }
}

export class GenerateTokenSuccess implements Action {
    readonly type = GENERATE_TOKEN_SUCCESS;

    constructor(public payload: { token: string }) {
    }
}

export class GenerateTokenFailure implements Action {
    readonly type = GENERATE_TOKEN_FAILURE;

    // TODO: craft response type for errors
    constructor(public payload: { response: HttpErrorResponse }) {
    }
}

export class ResumeSession implements Action {
    readonly type = RESUME_SESSION;

    constructor(public payload: { token: string }) {
    }
}

export class ClearToken implements Action {
    readonly type = CLEAR_TOKEN;
}

export class RegisterUser implements Action {
    readonly type = REGISTER_USER;

    constructor(public payload: UserRegistrationData) {
    }
}

export class RegisterUserSuccess implements Action {
    readonly type = REGISTER_USER_SUCCESS;
}

export class RegisterUserFailure implements Action {
    readonly type = REGISTER_USER_FAILURE;

    constructor(public payload: HttpErrorResponse) {
    }
}

export type AuthAction =
    GenerateToken
    | GenerateTokenSuccess
    | GenerateTokenFailure
    | ResumeSession
    | ClearToken
    | RegisterUser
    | RegisterUserSuccess
    | RegisterUserFailure;
