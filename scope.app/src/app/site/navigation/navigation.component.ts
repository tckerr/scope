import {Component, OnInit} from '@angular/core';
import {AuthState} from '../../state/auth/reducers';
import {Store} from '@ngrx/store';
import {getIsAuthenticated} from '../../state/auth/selectors/get-is-authenticated';
import {Organization} from '../../state/organizations/models/organization';
import {getActiveOrganization, OrgState, getAllOrgs} from '../../state/organizations/reducers';
import {SetActiveOrganizationId} from '../../state/organizations/actions/set-active-organization-id';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    private isAuthenticated: Store<boolean>;
    private activeOrganization: Store<Organization>;
    private organizations: Store<Organization[]>;

    constructor(
        private authStore: Store<AuthState>,
        private orgStore: Store<OrgState>
    ) {}

    ngOnInit() {
        this.isAuthenticated = this.authStore.select(getIsAuthenticated);
        this.activeOrganization = this.orgStore.select(getActiveOrganization);
        this.organizations = this.orgStore.select(getAllOrgs);
    }

    public setActiveOrganization(org: Organization) {
        this.orgStore.dispatch(new SetActiveOrganizationId({id: org.id}));
    }

}
