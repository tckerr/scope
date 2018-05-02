import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationsApi} from './services/organizations-api.service';
import {OrganizationsDebugComponent} from './components/organizations-debug/organizations-debug.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        CommonModule
    ],
    exports: [
        OrganizationsDebugComponent
    ],
    providers: [
        OrganizationsApi
    ],
    declarations: [
        OrganizationsDebugComponent,
        OrganizationsDebugComponent
    ]
})
export class OrganizationsModule {
}
