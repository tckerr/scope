import {Injectable} from '@angular/core';
import {Organization} from '../../state/organizations/models/organization';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {AuthenticatedApi} from '../../shared/api/authenticated-api.service';
import {AuthState} from '../../state/auth/reducers';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';

@Injectable()
export class OrganizationsApi extends AuthenticatedApi {

    constructor(private httpClient: HttpClient, store: Store<AuthState>) {
        super(store);
    }

    list(): Observable<Organization[]> {
        const url = environment.api.baseUrl + '/organizations/';
        return this.getHeaders()
            .flatMap(headers => {
                return this.httpClient.get<Organization[]>(url, {
                    headers: headers
                });
            });
    }
}
