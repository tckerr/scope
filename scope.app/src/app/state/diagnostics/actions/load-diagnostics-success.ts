import {Action} from '@ngrx/store';
import {Diagnostics} from '../../../diagnostics/models/diagnostics';
import {createActionType} from '../../shared/utils';

export const LOAD_DIAGNOSTICS_SUCCESS = createActionType('LOAD_DIAGNOSTICS_SUCCESS');

export class LoadDiagnosticsSuccess implements Action {
    readonly type = LOAD_DIAGNOSTICS_SUCCESS;

    constructor(public payload: Diagnostics) {
    }
}
