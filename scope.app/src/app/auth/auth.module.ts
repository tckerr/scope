import {NgModule} from '@angular/core';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {AuthApi} from './services/auth-api.service';
import {SharedModule} from '../shared/shared.module';
import {CookieModule} from 'ngx-cookie';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {TokenStorageService} from './services/token-storage.service';

@NgModule({
    imports: [
        SharedModule,
        CookieModule.forChild()
    ],
    providers: [
        AuthApi,
        TokenStorageService
    ],
    exports: [
        LoginFormComponent,
        RegisterFormComponent,
    ],
    declarations: [
        LoginFormComponent,
        RegisterFormComponent
    ]
})
export class AuthModule {
}
