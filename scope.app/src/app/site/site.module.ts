import {NgModule} from '@angular/core';
import {RootComponent} from './root/root.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AuthModule} from '../auth/auth.module';
import {DiagnosticsModule} from '../diagnostics/diagnostics.module';
import {SharedModule} from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RegisterFormComponent} from '../auth/register-form/register-form.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'forgot', component: PageNotFoundComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        SharedModule,
        AuthModule,
        DiagnosticsModule,
        RouterModule.forRoot(routes, { enableTracing: false })
    ],
    declarations: [
        RootComponent,
        NavigationComponent,
        FooterComponent,
        PageNotFoundComponent,
        LoginPageComponent
    ],
    providers: [],
    bootstrap: [RootComponent]
})
export class SiteModule {
}
