import {GenerateToken} from './generate-token';
import {GenerateTokenSuccess} from './generate-token-success';
import {GenerateTokenFailure} from './generate-token-failure';
import {ClearToken} from './clear-token';
import {ResumeSession} from './resume-session';
import {RegisterUser} from './register-user';
import {RegisterUserSuccess} from './register-user-success';
import {RegisterUserFailure} from './register-user-failure';

export type AuthAction =
    GenerateToken
    | GenerateTokenSuccess
    | GenerateTokenFailure
    | ResumeSession
    | ClearToken
    | RegisterUser
    | RegisterUserSuccess
    | RegisterUserFailure;
