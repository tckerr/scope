import {Component, OnInit} from '@angular/core';
import {ProjectsApi} from '../../services/projects-api';
import {Project} from '../../models/project';

@Component({
    selector: 'app-project-debug',
    templateUrl: './project-debug.component.html',
    styleUrls: ['./project-debug.component.css']
})
export class ProjectDebugComponent implements OnInit {
    public projects: Project[] = [];

    constructor(private projectsApi: ProjectsApi) {
    }

    ngOnInit() {
    }

    public fetchProjects() {
        this.projectsApi.fetchProjects().subscribe(p => this.projects = p);
    }

}
