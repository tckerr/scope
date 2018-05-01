import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Project} from '../models/project';
import {Observable} from 'rxjs/Observable';
import {AuthenticatedApi} from '../../shared/api/authenticated-api.service';
import {AuthState} from '../../state/auth/reducers';
import {Store} from '@ngrx/store';

@Injectable()
export class ProjectsApi extends AuthenticatedApi {

    constructor(private httpClient: HttpClient, store: Store<AuthState>) {
        super(store);
    }

    public fetchProjects(): Observable<Project[]> {
        const url = environment.api.baseUrl + '/projects/';
        return this.getHeaders()
            .flatMap(headers => {
                return this.httpClient.get<Project[]>(url, {
                    headers: headers
                });
            });
    }
}
