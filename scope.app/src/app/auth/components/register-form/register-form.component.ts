import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {usernameAvailability} from './validators/username-availability-validator';
import {AuthApi} from '../../services/auth-api.service';
import {AuthState, getAuthState} from '../../../state/auth/reducers';
import {Store} from '@ngrx/store';
import {RegisterUser} from '../../../state/auth/actions/auth';
import {Observable} from 'rxjs/Observable';
import {HttpErrorResponse} from '@angular/common/http';
import {passwordComparisonValidator} from './validators/password-comparison-validator';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
    private registerForm: FormGroup;
    private waitingForResponse: Observable<boolean>;
    private errorResponse: Observable<HttpErrorResponse>;

    constructor(
        private formBuilder: FormBuilder,
        private authApi: AuthApi,
        private store: Store<AuthState>) {
        this.createForm();
    }

    ngOnInit() {
        this.waitingForResponse = this.store
            .select(getAuthState)
            .map(state => state.auth.registration.waitingForResponse);
        this.waitingForResponse.subscribe(w => {
            if (w) {
                this.registerForm.disable()
            } else {
                this.registerForm.enable()
            }
        });
        this.errorResponse = this.store
            .select(getAuthState)
            .map(state => state.auth.registration.errorResponse)
            .do(res => {
                return res && Object.keys(res.error).forEach(key => {
                    this.registerForm.controls[key].setErrors({
                        'server_errors': res.error[key]
                    });
                });
            });
    }

    private createForm() {
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required, usernameAvailability(this.authApi)],
            password: ['', [Validators.required, Validators.maxLength(150)]],
            passwordRepeat: ['', [Validators.required, Validators.maxLength(150)]],
            email: ['', [Validators.required, Validators.email]]
        }, {
            validator: passwordComparisonValidator('password', 'passwordRepeat')
        });
    }

    public hasFieldErrors(fieldName: string, errorType: string) {
        return !!(this.registerForm.controls[fieldName].errors
            && !this.registerForm.controls[fieldName].pristine
            && this.registerForm.controls[fieldName].errors[errorType]);
    }

    public onSubmit(form: FormGroup) {
        if (form.invalid) {
            throw new Error('Cannot submit an invalid form')
        }
        this.store.dispatch(new RegisterUser({
            username: form.get('username').value,
            password: form.get('password').value,
            email: form.get('email').value
        }))
    }
}
