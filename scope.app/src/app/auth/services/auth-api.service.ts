import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Credentials} from '../models/credentials';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/do';
import {AuthUserSummary} from '../models/auth-user-summary';

@Injectable()
export class AuthApi {

    constructor(private http: HttpClient) {
    }

    public fetchToken(credentials: Credentials): Observable<string> {
        const url = environment.api.baseUrl + '/auth/token/';
        return this.http.post<{ token: string }>(url, credentials)
            .map(response => response.token);
    }

    public usernameExists(username: string): Observable<boolean> {
        const url = environment.api.baseUrl + '/auth/users/';
        const options = {params: {'username': username}};
        return this.http.get<[{ username: string }]>(url, options)
            .map(response => response.length > 0);
    }

    public registerUser(username: string, password: string, email: string): Observable<AuthUserSummary> {
        const url = environment.api.baseUrl + '/auth/users/';
        return this.http.post<AuthUserSummary>(url, {
            username: username,
            password: password,
            email: email
        });
    }
}
