import {createActionType} from '../../shared/utils';
import {Action} from '@ngrx/store';
import {Credentials} from '../../../auth/models/credentials';
import {HttpErrorResponse} from '@angular/common/http';

export const GENERATE_TOKEN = createActionType('GENERATE_TOKEN');
export const GENERATE_TOKEN_SUCCESS = createActionType('GENERATE_TOKEN_SUCCESS');
export const GENERATE_TOKEN_FAILURE = createActionType('GENERATE_TOKEN_FAILURE');
export const CLEAR_TOKEN = createActionType('CLEAR_TOKEN');

export class GenerateToken implements Action {
    readonly type = GENERATE_TOKEN;
    constructor(public payload: Credentials){}
}
export class GenerateTokenSuccess implements Action {
    readonly type = GENERATE_TOKEN_SUCCESS;

    constructor(public payload: {token: string}) {
    }
}

export class GenerateTokenFailure implements Action {
    readonly type = GENERATE_TOKEN_FAILURE;

    // TODO: craft response type for errors
    constructor(public payload: {response: HttpErrorResponse}) {
    }
}
export class ClearToken implements Action {
    readonly type = CLEAR_TOKEN;
}

export type AuthAction = GenerateToken | GenerateTokenSuccess | GenerateTokenFailure | ClearToken;
