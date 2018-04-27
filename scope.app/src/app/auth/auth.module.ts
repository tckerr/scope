import {NgModule} from '@angular/core';
import {LoginFormComponent} from './login-form/login-form.component';
import {AuthService} from './services/auth.service';
import {SharedModule} from '../shared/shared.module';
import { RegisterFormComponent } from './register-form/register-form.component';

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
        RegisterFormComponent
    ]
})
export class AuthModule {}
