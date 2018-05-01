import {Component, OnInit} from '@angular/core';
import {Project} from '../../models/project';
import {getAllProjects, ProjectsState} from '../../../state/projects/reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {LoadProjects} from '../../../state/projects/actions/projects';

@Component({
    selector: 'app-project-debug',
    templateUrl: './project-debug.component.html',
    styleUrls: ['./project-debug.component.css']
})
export class ProjectDebugComponent implements OnInit {
    projects: Observable<Project[]>;

    constructor(private store: Store<ProjectsState>) {
    }

    ngOnInit() {
        this.projects = this.store.select(getAllProjects);
        this.store.dispatch(new LoadProjects());
    }

    fetchProjects() {
        this.store.dispatch(new LoadProjects());
    }
}
