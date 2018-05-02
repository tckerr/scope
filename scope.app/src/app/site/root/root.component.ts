import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {LoadDiagnostics} from '../../state/diagnostics/actions/diagnostics';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app-state';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit, OnDestroy {
    private diagnosticsPolling: Subscription;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.diagnosticsPolling = Observable
            .timer(0, environment.settings.diagnosticFetchIntervalMs)
            .subscribe(() => this.store.dispatch(new LoadDiagnostics()));
    }

    ngOnDestroy(): void {
        this.diagnosticsPolling.unsubscribe();
    }

}
