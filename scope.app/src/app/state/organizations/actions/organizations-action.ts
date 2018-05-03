import {LoadOrganizations} from './load-organizations';
import {LoadOrganizationsSuccess} from './load-organizations-success';
import {ClearOrganizationsData} from './clear-data';

export type OrganizationsAction = LoadOrganizations | LoadOrganizationsSuccess | ClearOrganizationsData;
