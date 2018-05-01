import {NgModule} from '@angular/core';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {AuthApi} from './services/auth-api.service';
import {SharedModule} from '../shared/shared.module';
import {CookieModule} from 'ngx-cookie';
import {AuthTokenStorage} from './services/auth-token-storage.service';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {PasswordComparisonValidatorDirective} from './components/register-form/validators/password-comparison-validator.directive';
import {UsernameAvailabilityValidatorDirective} from './components/register-form/validators/username-availability-validator.directive';

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
        RegisterFormComponent,
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
