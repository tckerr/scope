import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {FormField} from '../../shared/form-field';


export class RegistrationFormData{
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

    private authService: AuthService;

    public submitting: boolean;
    public generalErrors: string[];
    public passwordErrors: string[];
    public usernameErrors: string[];
    public formData: RegistrationFormData = new RegistrationFormData();

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    ngOnInit() {}

    public onSubmit(form: NgForm) {
        this.submitting = true;
        this.clearErrors();
        // this.authService.register(this.registrationData)
        //     .subscribe(t => this.success(t), e => this.error(e));
    }

    private clearErrors() {
        this.generalErrors = [];
        this.passwordErrors = [];
        this.usernameErrors = [];
    }

}
