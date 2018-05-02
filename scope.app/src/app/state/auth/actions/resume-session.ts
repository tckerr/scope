import {Action} from '@ngrx/store';
import {createActionType} from '../../shared/utils';

export const RESUME_SESSION = createActionType('RESUME_SESSION');

export class ResumeSession implements Action {
    readonly type = RESUME_SESSION;

    constructor(public payload: { token: string }) {
    }
}
