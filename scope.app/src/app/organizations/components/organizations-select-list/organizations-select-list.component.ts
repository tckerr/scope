import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Organization} from '../../../state/organizations/models/organization';

@Component({
    selector: 'app-organizations-select-list',
    templateUrl: './organizations-select-list.component.html',
    styleUrls: ['./organizations-select-list.component.css']
})
export class OrganizationsSelectListComponent implements OnInit {

    @Input()
    public organizations: Organization[];

    @Input()
    public activeOrganization: Organization;

    @Output()
    public onSelect: EventEmitter<Organization> = new EventEmitter<Organization>();

    ngOnInit() {
    }

    public selectOrganization(org: Organization) {
        console.log(org);
        this.onSelect.next(org);
    }

}
