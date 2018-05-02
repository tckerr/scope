import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {LoadProjectsSuccess} from '../actions/load-projects-success';
import {map, switchMap} from 'rxjs/operators';
import {ProjectsApi} from '../../../project/services/projects-api';
import {LOAD_PROJECTS, LoadProjects} from '../actions/load-projects';

@Injectable()
export class ProjectsEffects {
    @Effect()
    loadProjects: Observable<Action> = this.actions.ofType<LoadProjects>(LOAD_PROJECTS)
        .pipe(
            switchMap(() => this.projectsApi.fetchProjects()),
            map(projects => new LoadProjectsSuccess(projects))
        );

    constructor(private actions: Actions,
                private projectsApi: ProjectsApi) {
    }
}
