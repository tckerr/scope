import {LoadProjects} from './load-projects';
import {LoadProjectsSuccess} from './load-projects-success';
import {ClearProjectsData} from './clear-projects-data';

export type ProjectsAction = LoadProjects | LoadProjectsSuccess | ClearProjectsData;
