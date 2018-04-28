import {NgModule} from '@angular/core';
import {LoginFormComponent} from './login-form/login-form.component';
import {AuthApi} from './services/auth-api.service';
import {SharedModule} from '../shared/shared.module';
import {RegisterFormComponent} from './register-form/register-form.component';
import {PasswordComparisonValidatorDirective} from './register-form/validators/password-comparison-validator.directive';
import {UsernameAvailabilityValidatorDirective} from './register-form/validators/username-availability-validator.directive';
import {CookieModule} from 'ngx-cookie';
import {AuthTokenStorage} from './services/auth-token-storage.service';

@NgModule({
    imports: [
        SharedModule,
        CookieModule.forChild()
    ],
    providers: [
        AuthApi,
        AuthTokenStorage
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
export class AuthModule {
}
