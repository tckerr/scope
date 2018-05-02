import {Action} from '@ngrx/store';
import {createActionType} from '../../shared/utils';

export const LOAD_DIAGNOSTICS_FAILURE = createActionType('LOAD_DIAGNOSTICS_FAILURE');

export class LoadDiagnosticsFailure implements Action {
    readonly type = LOAD_DIAGNOSTICS_FAILURE;

    constructor(public payload: any) {
    }
}
