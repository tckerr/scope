import {NgModule} from '@angular/core';
import {LoginFormComponent} from './login-form/login-form.component';
import {AuthService} from './services/auth.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        AuthService
    ],
    exports: [
        LoginFormComponent
    ],
    declarations: [
        LoginFormComponent
    ]
})
export class AuthModule {}
