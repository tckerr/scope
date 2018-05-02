import {NgModule} from '@angular/core';
import {VersionNumberComponent} from './components/version-number/version-number.component';
import {SharedModule} from '../shared/shared.module';
import {DatabaseStatusComponent} from './components/database-status/database-status.component';
import {DiagnosticsApi} from './services/diagnostics-api.service';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        VersionNumberComponent,
        DatabaseStatusComponent
    ],
    providers: [
        DiagnosticsApi
    ],
    exports: [
        VersionNumberComponent,
        DatabaseStatusComponent
    ]
})
export class DiagnosticsModule {
}
