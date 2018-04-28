import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Credentials} from '../models/credentials';
import {Token} from '../models/token';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    private authService: AuthService;
    public username: string;
    public password: string;
    public generalErrors: string[] = [];
    public passwordErrors: string[] = [];
    public usernameErrors: string[] = [];
    public submitting = false;

    @Input()
    public onSignIn: () => void = () => {console.log('not overridden')};

    constructor(authService: AuthService) {
        this.authService = authService;
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

    private success(t: Token) {
        this.submitting = false;
        this.onSignIn();
        console.log("signed in")
    }

    ngOnInit() {
    }

}
