import {Component, OnInit} from '@angular/core';
import {AuthTokenStorage} from '../../../auth/services/auth-token-storage.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

    constructor(private tokenStorage: AuthTokenStorage, private router: Router) {
    }

    ngOnInit() {
    }

    isAuthenticated(){
        return this.tokenStorage.isAuthenticated();
    }

    logout() {
        this.tokenStorage.clearToken();
        this.router.navigate(['/login'])
    }
}
