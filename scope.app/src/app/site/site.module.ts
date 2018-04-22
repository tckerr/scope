import {NgModule} from '@angular/core';
import {RootComponent} from './root/root.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AuthModule} from '../auth/auth.module';
import {DiagnosticsModule} from '../diagnostics/diagnostics.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        AuthModule,
        DiagnosticsModule,
    ],
    declarations: [
        RootComponent,
        NavigationComponent
    ],
    providers: [],
    bootstrap: [RootComponent]
})
export class SiteModule {
}
