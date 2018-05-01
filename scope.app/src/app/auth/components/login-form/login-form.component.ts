import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {
    AuthState,
    getAuthLoginGeneralErrors,
    getAuthLoginPasswordErrors,
    getAuthLoginUsernameErrors,
    getIsGeneratingToken
} from '../../../state/auth/reducers';
import {Store} from '@ngrx/store';
import {GenerateToken} from '../../../state/auth/actions/auth';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    public submitting: Observable<boolean>;
    private generalErrors: Observable<string[]>;
    private usernameErrors: Observable<string[]>;
    private passwordErrors: Observable<string[]>;

    constructor(private store: Store<AuthState>) {
    }

    public onSubmit(form: NgForm, username: string, password: string) {
        if (form.valid) {
            this.store.dispatch(new GenerateToken({
                username: username,
                password: password
            }))
        }
    }

    ngOnInit() {
        this.submitting = this.store.select(getIsGeneratingToken);
        this.generalErrors = this.store.select(getAuthLoginGeneralErrors);
        this.usernameErrors = this.store.select(getAuthLoginUsernameErrors);
        this.passwordErrors = this.store.select(getAuthLoginPasswordErrors);
    }

}
