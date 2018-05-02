import {
    AuthAction,
    CLEAR_TOKEN,
    GENERATE_TOKEN,
    GENERATE_TOKEN_FAILURE,
    GENERATE_TOKEN_SUCCESS,
    REGISTER_USER,
    REGISTER_USER_FAILURE,
    REGISTER_USER_SUCCESS, RESUME_SESSION, ResumeSession
} from '../actions/auth';
import {HttpErrorResponse} from '@angular/common/http';

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
