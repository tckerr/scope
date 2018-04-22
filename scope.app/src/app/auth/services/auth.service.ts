import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Token} from '../models/token';
import {Credentials} from '../models/credentials';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
    private api: { baseUrl: string; auth: { tokenUrl: string } };
    private _tokenFetched: Subject<Token> = new Subject<Token>();
    private tokenFetched$: Observable<Token>;
    private http: HttpClient;
    private _token: Token;

    constructor(http: HttpClient) {
        this.http = http;
        this.tokenFetched$ = this._tokenFetched.asObservable();
        this.api = environment.api;
        this.tokenFetched$.subscribe(r => this._token = r);
    }

    public get token() {
        if (!this._token)
            throw new Error('No token cached. Did the user sign in?');
        return this._token;
    }

    public fetchToken(credentials: Credentials) {
        const url = this.api.baseUrl + this.api.auth.tokenUrl;
        this.http.post<{ token: string }>(url, credentials)
            .map(response => new Token(response.token))
            .subscribe(token => this._tokenFetched.next(token));
    }
}
