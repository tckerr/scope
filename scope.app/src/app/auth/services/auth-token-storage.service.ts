import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie';
import {TokenMissingError} from '../models/token-missing-error';
import {AuthStorageData} from '../models/auth-storage-data';

@Injectable()
export class AuthTokenStorage {
    private tokenKey = 'auth:token';

    constructor(private cookieService: CookieService) {
    }

    public setToken(token) {
        const data: AuthStorageData = {
            'token': token
        };
        this.cookieService.putObject(this.tokenKey, data);
    }

    public isAuthenticated(): boolean {
        return !!this.retrieveTokenFromStorage();
    }

    public get token() {
        const data = this.retrieveTokenFromStorage();
        if (!data.token) {
            throw new TokenMissingError('No token in storage')
        }
        return data.token;
    }

    private retrieveTokenFromStorage(): AuthStorageData {
        return this.cookieService.getObject(this.tokenKey) as AuthStorageData;
    }
}
