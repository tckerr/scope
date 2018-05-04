import {LoadOrganizations} from './load-organizations';
import {LoadOrganizationsSuccess} from './load-organizations-success';
import {ClearOrganizationsData} from './clear-data';
import {SetActiveOrganizationId} from './set-active-organization-id';

export type OrganizationsAction = LoadOrganizations
    | LoadOrganizationsSuccess
    | ClearOrganizationsData
    | SetActiveOrganizationId;
