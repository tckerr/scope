import * as fromDiagnostics from './diagnostics';
import {createFeatureSelector} from '@ngrx/store';

export interface DiagnosticsState {
    diagnostics: fromDiagnostics.State;
}

export const reducers = {
    diagnostics: fromDiagnostics.reducer
};

export const getDiagnosticsState = createFeatureSelector<DiagnosticsState>('diagnostics');
