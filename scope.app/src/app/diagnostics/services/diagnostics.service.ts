import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Diagnostics} from '../models/diagnostics';
import {timer} from 'rxjs/observable/timer';

@Injectable()
export class DiagnosticsService {
    private http: HttpClient;
    private diagnosticFetchIntervalMs: any;
    private diagnosticsFetched: Subject<Diagnostics> = new Subject<Diagnostics>();
    public diagnosticsFetched$: Observable<Diagnostics>;
    private apiUrl: string;

    constructor(http: HttpClient) {
        this.http = http;
        this.diagnosticFetchIntervalMs = environment.settings.diagnosticFetchIntervalMs;
        this.apiUrl = environment.api.baseUrl + environment.api.diagnostics.list;
        this.diagnosticsFetched$ = this.diagnosticsFetched.asObservable();
        this.startDiagnosticTimer();
    }

    private startDiagnosticTimer() {
        timer(this.diagnosticFetchIntervalMs)
            .subscribe(r => this.fetchDiagnostics());
    }

    public fetchDiagnostics() {
        this.http.get<Diagnostics>(this.apiUrl)
            .subscribe(d => this.diagnosticsFetched.next(d))
    }
}
