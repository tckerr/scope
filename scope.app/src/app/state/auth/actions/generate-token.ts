import {Action} from '@ngrx/store';
import {Credentials} from '../../../auth/models/credentials';
import {createActionType} from '../../shared/utils';

export const GENERATE_TOKEN = createActionType('GENERATE_TOKEN');

export class GenerateToken implements Action {
    readonly type = GENERATE_TOKEN;

    constructor(public payload: Credentials) {
    }
}





