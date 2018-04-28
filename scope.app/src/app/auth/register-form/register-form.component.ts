import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthApi} from '../services/auth-api.service';
import {FormField} from '../../shared/form-field';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mergeMap';
import {Router} from '@angular/router';

export class RegistrationFormData {
    public username: FormField<string> = new FormField<string>();
    public password: FormField<string> = new FormField<string>();
    public passwordRepeat: FormField<string> = new FormField<string>();
    public email: FormField<string> = new FormField<string>();
}

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

    private authService: AuthApi;

    public submitting: boolean;
    public formData: RegistrationFormData = new RegistrationFormData();
    private router: Router;

    constructor(authService: AuthApi, router: Router) {
        this.authService = authService;
        this.router = router;
    }

    ngOnInit() {
    }

    public onSubmit(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.submitting = true;
        const username = this.formData.username.value;
        const password = this.formData.password.value;
        const email = this.formData.email.value;
        this.authService
            .registerUser(username, password, email)
            .subscribe(r => this.router.navigate(['/login']), r => this.submitting = false);

    }
}
