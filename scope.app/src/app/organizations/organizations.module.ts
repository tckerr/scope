import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationsApi} from './services/organizations-api.service';
import {OrganizationsDebugComponent} from './components/organizations-debug/organizations-debug.component';
import {SharedModule} from '../shared/shared.module';
import { OrganizationsSelectListComponent } from './components/organizations-select-list/organizations-select-list.component';

@NgModule({
    imports: [
        SharedModule,
        CommonModule
    ],
    exports: [
        OrganizationsDebugComponent,
        OrganizationsSelectListComponent
    ],
    providers: [
        OrganizationsApi
    ],
    declarations: [
        OrganizationsDebugComponent,
        OrganizationsSelectListComponent
    ]
})
export class OrganizationsModule {
}
