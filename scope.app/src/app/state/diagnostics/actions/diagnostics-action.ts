import {LoadDiagnostics} from './load-diagnostics';
import {LoadDiagnosticsSuccess} from './load-diagnostics-success';
import {LoadDiagnosticsFailure} from './load-diagnostics-failure';

export type DiagnosticsAction = LoadDiagnostics | LoadDiagnosticsSuccess | LoadDiagnosticsFailure;
