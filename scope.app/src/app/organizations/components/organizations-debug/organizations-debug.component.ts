import {Component, OnInit} from '@angular/core';
import {getAllOrgs, OrgState} from '../../../state/organizations/reducers';
import {Store} from '@ngrx/store';
import {LoadOrganizations} from '../../../state/organizations/actions/load-organizations';
import {Organization} from '../../../state/organizations/models/organization';

@Component({
    selector: 'app-organizations-debug',
    templateUrl: './organizations-debug.component.html',
    styleUrls: ['./organizations-debug.component.css']
})
export class OrganizationsDebugComponent implements OnInit {
    private orgs: Store<Organization[]>;

    constructor(private store: Store<OrgState>) {
        this.orgs = this.store.select(getAllOrgs);
    }

    ngOnInit() {
        this.store.dispatch(new LoadOrganizations());
    }

    public fetchOrgs() {
        this.store.dispatch(new LoadOrganizations());
    }

}
