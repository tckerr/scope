import {createActionType} from '../../shared/utils';
import {Action} from '@ngrx/store';
import {Diagnostics} from '../../../diagnostics/models/diagnostics';


export const LOAD_DIAGNOSTICS = createActionType('LOAD_DIAGNOSTICS');
export const LOAD_DIAGNOSTICS_SUCCESS = createActionType('LOAD_DIAGNOSTICS_SUCCESS');
export const LOAD_DIAGNOSTICS_FAILURE = createActionType('LOAD_DIAGNOSTICS_FAILURE');

export class LoadDiagnostics implements Action {
    readonly type = LOAD_DIAGNOSTICS;
}

export class LoadDiagnosticsSuccess implements Action {
    readonly type = LOAD_DIAGNOSTICS_SUCCESS;

    constructor(public payload: Diagnostics) {
    }
}

export class LoadDiagnosticsFailure implements Action {
    readonly type = LOAD_DIAGNOSTICS_FAILURE;

    constructor(public payload: any) {
    }
}

export type DiagnosticsAction = LoadDiagnostics | LoadDiagnosticsSuccess | LoadDiagnosticsFailure;
