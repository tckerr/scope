import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectDebugComponent} from './components/project-debug/project-debug.component';
import {ProjectsApi} from './services/projects-api';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        ProjectDebugComponent
    ],
    providers: [
        ProjectsApi
    ],
    declarations: [
        ProjectDebugComponent
    ]
})
export class ProjectModule {
}
