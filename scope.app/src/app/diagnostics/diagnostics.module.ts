import {NgModule} from '@angular/core';
import {DiagnosticsService} from './services/diagnostics.service';
import {VersionNumberComponent} from './components/version-number/version-number.component';
import {SharedModule} from '../shared/shared.module';
import { DatabaseStatusComponent } from './components/database-status/database-status.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [VersionNumberComponent, DatabaseStatusComponent],
    providers: [DiagnosticsService],
    exports: [VersionNumberComponent, DatabaseStatusComponent]
})
export class DiagnosticsModule {
}
