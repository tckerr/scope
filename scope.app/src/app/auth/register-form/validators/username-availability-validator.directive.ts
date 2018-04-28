import {Directive} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../services/auth.service';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';

@Directive({
    selector: '[appUsernameAvailability]',
    providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UsernameAvailabilityValidatorDirective, multi: true}]
})
export class UsernameAvailabilityValidatorDirective implements AsyncValidator {
    private authService: AuthService;

    constructor(authService: AuthService) {
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
