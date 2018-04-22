import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Credentials} from '../models/credentials';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    private authService: AuthService;
    private username: string;
    private password: string;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    public onSubmit(form: NgForm) {
        const credentials = new Credentials();
        credentials.username = this.username;
        credentials.password = this.password;
        this.authService.fetchToken(credentials);
    }

    ngOnInit() {
    }

}
