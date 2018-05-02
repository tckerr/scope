import {createActionType} from '../../shared/utils';
import {Action} from '@ngrx/store';

export const CLEAR_TOKEN = createActionType('CLEAR_TOKEN');

export class ClearToken implements Action {
    readonly type = CLEAR_TOKEN;
}
