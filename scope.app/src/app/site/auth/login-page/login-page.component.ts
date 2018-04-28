import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    private router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    ngOnInit() {
    }

    navigateToProjects() {
        this.router.navigate(['projects']);
    }
}
