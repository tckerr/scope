import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {LoadOrganizationsSuccess} from '../actions/load-organizations-success';
import {map, switchMap} from 'rxjs/operators';
import {LOAD_ORGANIZATIONS, LoadOrganizations} from '../actions/load-organizations';
import {OrganizationsApi} from '../../../organizations/services/organizations-api.service';

@Injectable()
export class OrganizationsEffects {
    @Effect()
    loadOrganizations: Observable<Action> = this.actions.ofType<LoadOrganizations>(LOAD_ORGANIZATIONS)
        .pipe(
            switchMap(() => this.organizationsApi.list()),
            map(organizations => new LoadOrganizationsSuccess(organizations))
        );

    constructor(private actions: Actions,
                private organizationsApi: OrganizationsApi) {
    }
}
