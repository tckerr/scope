import {createActionType} from '../../shared/utils';
import {Action} from '@ngrx/store';

export const LOAD_DIAGNOSTICS = createActionType('LOAD_DIAGNOSTICS');

export class LoadDiagnostics implements Action {
    readonly type = LOAD_DIAGNOSTICS;
}
