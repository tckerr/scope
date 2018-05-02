import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {LoadDiagnostics} from '../../state/diagnostics/actions/diagnostics';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app-state';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {TokenStorageService} from '../../auth/services/token-storage.service';
import {ResumeSession} from '../../state/auth/actions/auth';

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit, OnDestroy {
    private diagnosticsPolling: Subscription;

    constructor(private store: Store<AppState>, private tokenStorage: TokenStorageService) {
    }

    ngOnInit() {
        this.diagnosticsPolling = Observable
            .timer(0, environment.settings.diagnosticFetchIntervalMs)
            .subscribe(() => this.store.dispatch(new LoadDiagnostics()));
        this.restoreAuthSession();
    }

    private restoreAuthSession() {
        const token = this.tokenStorage.getToken();
        if (token) {
            this.store.dispatch(new ResumeSession({token: token}));
        }
    }

    ngOnDestroy(): void {
        this.diagnosticsPolling.unsubscribe();
    }

}
