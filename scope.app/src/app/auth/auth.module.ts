import {NgModule} from '@angular/core';
import {LoginFormComponent} from './login-form/login-form.component';
import {AuthService} from './services/auth.service';
import {SharedModule} from '../shared/shared.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { PasswordComparisonValidatorDirective } from './register-form/validators/password-comparison-validator.directive';
import { UsernameAvailabilityValidatorDirective } from './register-form/validators/username-availability-validator.directive';

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        AuthService
    ],
    exports: [
        LoginFormComponent,
        RegisterFormComponent
    ],
    declarations: [
        LoginFormComponent,
        RegisterFormComponent,
        PasswordComparisonValidatorDirective,
        UsernameAvailabilityValidatorDirective
    ]
})
export class AuthModule {}
