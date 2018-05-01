import {AuthAction, CLEAR_TOKEN, GENERATE_TOKEN, GENERATE_TOKEN_FAILURE, GENERATE_TOKEN_SUCCESS} from '../actions/auth';
import {HttpErrorResponse} from '@angular/common/http';

export interface State {
    token: string;
    loginProcess: {
        errorResponse: HttpErrorResponse,
        isGeneratingToken: boolean
    }
}

const defaultState: State = {
    token: null,
    loginProcess: {
        errorResponse: null,
        isGeneratingToken: false
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
        default:
            return state;
    }
}
