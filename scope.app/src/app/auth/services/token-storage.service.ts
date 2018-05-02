import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Injectable()
export class TokenStorageService {

    private tokenKey = 'authToken';

    constructor(private cookieService: CookieService) {
    }

    addToken(token: string) {
        this.cookieService.put(this.tokenKey, token);
    }

    getToken() {
        return this.cookieService.get(this.tokenKey);
    }

    clearToken() {
        this.cookieService.remove(this.tokenKey);
    }
}
