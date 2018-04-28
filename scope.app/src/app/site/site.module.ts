import {NgModule} from '@angular/core';
import {RootComponent} from './root/root.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AuthModule} from '../auth/auth.module';
import {DiagnosticsModule} from '../diagnostics/diagnostics.module';
import {SharedModule} from '../shared/shared.module';
import {FooterComponent} from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {CookieModule} from 'ngx-cookie';
import {ProjectDashboardPageComponent} from './project/project-dashboard-page/project-dashboard-page.component';
import {ProjectModule} from '../project/project.module';
import {IsAuthenticatedGuard} from '../auth/guards/is-authenticated.guard';
import {IsAnonymousGuard} from '../auth/guards/is-anonymous.guard';
import {RegisterFormComponent} from '../auth/components/register-form/register-form.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [IsAnonymousGuard]
    },
    {
        path: 'forgot',
        component: PageNotFoundComponent,
        canActivate: [IsAnonymousGuard]
    },
    {path: 'register', component: RegisterFormComponent},
    {
        path: 'projects',
        component: ProjectDashboardPageComponent,
        canActivate: [IsAuthenticatedGuard]

    },
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        SharedModule,
        AuthModule,
        ProjectModule,
        DiagnosticsModule,
        CookieModule.forRoot(),
        RouterModule.forRoot(routes, {enableTracing: false})
    ],
    declarations: [
        RootComponent,
        NavigationComponent,
        FooterComponent,
        PageNotFoundComponent,
        LoginPageComponent,
        ProjectDashboardPageComponent
    ],
    providers: [],
    bootstrap: [RootComponent]
})
export class SiteModule {
}
