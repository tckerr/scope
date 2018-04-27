import {NgModule} from '@angular/core';
import {RootComponent} from './root/root.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AuthModule} from '../auth/auth.module';
import {DiagnosticsModule} from '../diagnostics/diagnostics.module';
import {SharedModule} from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from '../auth/login-form/login-form.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginFormComponent },
    { path: 'forgot', component: LoginFormComponent },
    { path: 'register', component: LoginFormComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        SharedModule,
        AuthModule,
        DiagnosticsModule,
        RouterModule.forRoot(routes, { enableTracing: true })
    ],
    declarations: [
        RootComponent,
        NavigationComponent,
        FooterComponent,
        PageNotFoundComponent
    ],
    providers: [],
    bootstrap: [RootComponent]
})
export class SiteModule {
}
