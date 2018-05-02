import {Directive} from '@angular/core';
import {AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, ValidationErrors, ValidatorFn} from '@angular/forms';
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

@Directive({
    selector: '[appUsernameAvailability]',
    providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UsernameAvailabilityValidatorDirective, multi: true}]
})
export class UsernameAvailabilityValidatorDirective implements AsyncValidator {
    private authService: AuthApi;

    constructor(authService: AuthApi) {
        this.authService = authService;
    }

    validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        if (!c.value) {
            return null;
        }

        return Observable.timer(500).switchMap(() => {
            return this.authService.usernameExists(c.value)
                .map(r => r ? {'appUsernameAvailability': 'Username is already taken'} : null);
        });


    }
}
