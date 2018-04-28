import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthApi} from '../../services/auth-api.service';
import {Credentials} from '../../models/credentials';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthTokenStorage} from '../../services/auth-token-storage.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    public username: string;
    public password: string;
    public generalErrors: string[] = [];
    public passwordErrors: string[] = [];
    public usernameErrors: string[] = [];
    public submitting = false;

    @Input()
    public onSignIn: () => void = () => {console.log('not overridden')};

    constructor(private authService: AuthApi, private tokenStorage: AuthTokenStorage) {
    }

    public onSubmit(form: NgForm) {
        this.submitting = true;
        this.clearErrors();
        const credentials = new Credentials();
        credentials.username = this.username;
        credentials.password = this.password;
        this.authService.fetchToken(credentials)
            .subscribe(t => this.success(t), e => this.error(e));
    }

    private clearErrors() {
        this.generalErrors = [];
        this.passwordErrors = [];
        this.usernameErrors = [];
    }

    private error(e: HttpErrorResponse) {
        this.passwordErrors = e.error.password || [];
        this.usernameErrors = e.error.username || [];
        this.generalErrors = e.error.non_field_errors || [];
        this.submitting = false;
    }

    private success(token: string) {
        this.submitting = false;
        this.tokenStorage.setToken(token);
        this.onSignIn();
    }

    ngOnInit() {
    }

}
