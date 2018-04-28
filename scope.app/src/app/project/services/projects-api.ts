import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Project} from '../models/project';
import {Observable} from 'rxjs/Observable';
import {AuthTokenStorage} from '../../auth/services/auth-token-storage.service';
import {AuthenticatedApi} from '../../shared/api/authenticated-api.service';

@Injectable()
export class ProjectsApi extends AuthenticatedApi {

    constructor(private httpClient: HttpClient, tokenStorage: AuthTokenStorage) {
        super(tokenStorage);
    }

    public fetchProjects(): Observable<Project[]> {
        const url = environment.api.baseUrl + '/projects/';
        return this.httpClient.get<Project[]>(url, {
            headers: this.getHeaders()
        });
    }
}
