import {Component, OnInit} from '@angular/core';
import {AuthState} from '../../../state/auth/reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Logout} from '../../../state/auth/actions/logout';
import {getIsAuthenticated} from '../../../state/auth/selectors/get-is-authenticated';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
    private isAuthenticated: Observable<boolean>;

    constructor(private store: Store<AuthState>) {
    }

    ngOnInit() {
        this.isAuthenticated = this.store.select(getIsAuthenticated);
    }

    logout() {
        this.store.dispatch(new Logout());
    }
}
