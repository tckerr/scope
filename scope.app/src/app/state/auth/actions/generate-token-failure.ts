import {Action} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {createActionType} from '../../shared/utils';

export const GENERATE_TOKEN_FAILURE = createActionType('GENERATE_TOKEN_FAILURE');

export class GenerateTokenFailure implements Action {
    readonly type = GENERATE_TOKEN_FAILURE;

    // TODO: craft response type for errors
    constructor(public payload: { response: HttpErrorResponse }) {
    }
}
