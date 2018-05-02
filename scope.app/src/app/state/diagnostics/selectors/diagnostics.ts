import {createSelector} from '@ngrx/store';
import {DiagnosticsState, getDiagnosticsState} from '../reducers';

export const getDiagnostics = createSelector(
    getDiagnosticsState,
    (state: DiagnosticsState) => state.diagnostics.diagnostics
);
