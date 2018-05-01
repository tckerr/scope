import {NgModule} from '@angular/core';
import {VersionNumberComponent} from './components/version-number/version-number.component';
import {SharedModule} from '../shared/shared.module';
import {DatabaseStatusComponent} from './components/database-status/database-status.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        VersionNumberComponent,
        DatabaseStatusComponent
    ],
    providers: [],
    exports: [
        VersionNumberComponent,
        DatabaseStatusComponent
    ]
})
export class DiagnosticsModule {
}
