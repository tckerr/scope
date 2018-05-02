import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {map, switchMap} from 'rxjs/operators';
import {LOAD_DIAGNOSTICS, LoadDiagnostics, LoadDiagnosticsSuccess} from '../actions/diagnostics';
import {DiagnosticsApi} from '../../../diagnostics/services/diagnostics-api.service';

@Injectable()
export class DiagnosticsEffects {
    @Effect()
    loadDiagnostics: Observable<Action> = this.actions
        .ofType<LoadDiagnostics>(LOAD_DIAGNOSTICS)
        .pipe(
            switchMap(() => this.diagnosticsApi.fetchDiagnostics()),
            map(diagnostics => new LoadDiagnosticsSuccess(diagnostics))
        );

    constructor(private actions: Actions,
                private diagnosticsApi: DiagnosticsApi) {
    }
}
