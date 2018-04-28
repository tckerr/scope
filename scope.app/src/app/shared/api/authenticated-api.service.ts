import {Injectable} from '@angular/core';
import {AuthTokenStorage} from '../../auth/services/auth-token-storage.service';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthenticatedApi {

    constructor(private tokenStorage: AuthTokenStorage) {
    }

    protected getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Token ${this.tokenStorage.token}`
        });
    }

}
