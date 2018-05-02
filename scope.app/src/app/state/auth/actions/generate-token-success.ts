import {createActionType} from '../../shared/utils';
import {Action} from '@ngrx/store';

export const GENERATE_TOKEN_SUCCESS = createActionType('GENERATE_TOKEN_SUCCESS');

export class GenerateTokenSuccess implements Action {
    readonly type = GENERATE_TOKEN_SUCCESS;

    constructor(public payload: { token: string }) {
    }
}
