import {NgModule} from '@angular/core';
import {DiagnosticsService} from './services/diagnostics.service';
import {VersionNumberComponent} from './components/version-number/version-number.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [VersionNumberComponent],
    providers: [DiagnosticsService],
    exports: [VersionNumberComponent]
})
export class DiagnosticsModule {
}
