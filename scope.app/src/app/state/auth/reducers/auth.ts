import {
    AuthAction} from '../actions/auth-action';
import {HttpErrorResponse} from '@angular/common/http';
import {GENERATE_TOKEN} from '../actions/generate-token';
import {GENERATE_TOKEN_SUCCESS} from '../actions/generate-token-success';
import {GENERATE_TOKEN_FAILURE} from '../actions/generate-token-failure';
import {CLEAR_TOKEN} from '../actions/clear-token';
import {RESUME_SESSION} from '../actions/resume-session';
import {REGISTER_USER} from '../actions/register-user';
import {REGISTER_USER_SUCCESS} from '../actions/register-user-success';
import {REGISTER_USER_FAILURE} from '../actions/register-user-failure';

export interface State {
    token: string;
    loginProcess: {
        errorResponse: HttpErrorResponse,
        isGeneratingToken: boolean
    },
    registration: {
        errorResponse: HttpErrorResponse,
        waitingForResponse: boolean
    }
}

const defaultState: State = {
    token: null,
    loginProcess: {
        errorResponse: null,
        isGeneratingToken: false
    },
    registration: {
        errorResponse: null,
        waitingForResponse: false
    }
};

export function reducer(state: State = defaultState, action: AuthAction) {
    switch (action.type) {
        case GENERATE_TOKEN:
            return {
                ...state,
                loginProcess: {
                    errorResponse: null,
                    isGeneratingToken: true
                }
            };
        case CLEAR_TOKEN:
            return {...state, token: null};
        case GENERATE_TOKEN_FAILURE:
            return {
                ...state,
                loginProcess: {
                    errorResponse: action.payload.response,
                    isGeneratingToken: false
                }
            };
        case GENERATE_TOKEN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                loginProcess: {
                    isGeneratingToken: false,
                    errorResponse: null
                }
            };
        case RESUME_SESSION:
            return {
                ...state,
                token: action.payload.token
            };
        case REGISTER_USER:
            return {
                ...state,
                registration: {
                    waitingForResponse: true
                }
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                registration: {
                    errorResponse: null,
                    waitingForResponse: false
                }
            };
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                registration: {
                    errorResponse: action.payload,
                    waitingForResponse: false
                }
            };
        default:
            return state;
    }
}
