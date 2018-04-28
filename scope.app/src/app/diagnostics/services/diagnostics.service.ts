import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Diagnostics} from '../models/diagnostics';
import {timer} from 'rxjs/observable/timer';

@Injectable()
export class DiagnosticsService {
    private diagnosticFetchIntervalMs: any;
    private diagnosticsFetched: Subject<Diagnostics> = new Subject<Diagnostics>();
    public diagnosticsFetched$: Observable<Diagnostics>;
    private apiUrl: string;

    constructor(private httpClient: HttpClient) {
        this.diagnosticFetchIntervalMs = environment.settings.diagnosticFetchIntervalMs;
        this.apiUrl = environment.api.baseUrl + '/diagnostics/';
        this.diagnosticsFetched$ = this.diagnosticsFetched.asObservable();
        this.startDiagnosticTimer();
    }

    private startDiagnosticTimer() {
        timer(this.diagnosticFetchIntervalMs)
            .subscribe(r => this.fetchDiagnostics());
    }

    public fetchDiagnostics() {
        this.httpClient.get<Diagnostics>(this.apiUrl)
            .subscribe(d => this.diagnosticsFetched.next(d))
    }
}
