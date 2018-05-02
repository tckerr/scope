import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Diagnostics} from '../models/diagnostics';

@Injectable()
export class DiagnosticsApi {

    constructor(private httpClient: HttpClient) {
    }

    public fetchDiagnostics(): Observable<Diagnostics> {
        const apiUrl = environment.api.baseUrl + '/diagnostics/';
        return this.httpClient.get<Diagnostics>(apiUrl);
    }
}
