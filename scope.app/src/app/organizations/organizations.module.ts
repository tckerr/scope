import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationListComponent} from './components/organization-list/organization-list.component';
import {OrganizationsApi} from './services/organizations-api.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        OrganizationsApi
    ],
    declarations: [OrganizationListComponent]
})
export class OrganizationsModule {
}
