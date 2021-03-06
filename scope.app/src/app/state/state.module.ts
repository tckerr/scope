import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app-effects';
import {appMetaReducers, appReducer} from './app-reducer';
import {CustomSerializer} from './shared/utils';
import * as fromProjects from './projects/reducers';
import * as fromAuth from './auth/reducers';
import * as fromDiagnostics from './diagnostics/reducers';
import * as fromOrgs from './organizations/reducers';
import {AuthEffects} from './auth/effects/auth';
import {ProjectsEffects} from './projects/effects/projects';
import {RouterEffects} from './router/effects/router';
import {DiagnosticsEffects} from './diagnostics/effects/diagnostics';
import {OrganizationsEffects} from './organizations/effects/organizations';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(appReducer, {
            metaReducers: appMetaReducers
        }),
        StoreModule.forFeature('projects', fromProjects.reducers),
        StoreModule.forFeature('organizations', fromOrgs.reducers),
        StoreModule.forFeature('auth', fromAuth.reducers),
        StoreModule.forFeature('diagnostics', fromDiagnostics.reducers),
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot([AppEffects]),
        EffectsModule.forFeature([RouterEffects]),
        EffectsModule.forFeature([ProjectsEffects]),
        EffectsModule.forFeature([OrganizationsEffects]),
        EffectsModule.forFeature([AuthEffects]),
        EffectsModule.forFeature([DiagnosticsEffects]),
        StoreDevtoolsModule.instrument()
    ],
    declarations: []
})
export class StateModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: StateModule,
            providers: [
                {
                    provide: RouterStateSerializer,
                    useClass: CustomSerializer
                }
            ]
        };
    }

    constructor(@Optional() @SkipSelf() parentModule: StateModule) {
        if (parentModule) {
            throw new Error(
                'StateModule is already loaded. Import it in the AppModule only');
        }

    }
}
