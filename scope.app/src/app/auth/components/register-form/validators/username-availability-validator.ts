import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import {AuthApi} from '../../../services/auth-api.service';

export function usernameAvailability(authApi: AuthApi): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
        return Observable.timer(500).switchMap(() => {
            return authApi.usernameExists(control.value)
                .map(r => r ? {'usernameAvailability': 'Username is already taken'} : null);
        });
    };
}
