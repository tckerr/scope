import {AuthAction, CLEAR_TOKEN, GENERATE_TOKEN_FAILURE, GENERATE_TOKEN_SUCCESS} from '../actions/auth';

export interface State {
    token: string;
    loginErrors: any;
}

const defaultState: State = {
    token: null,
    loginErrors: {}
};

export function reducer(state: State = defaultState, action: AuthAction) {
    switch (action.type) {
        case CLEAR_TOKEN:
            return { ...state, token: null };
        case GENERATE_TOKEN_FAILURE:
            return { ...state, loginErrors: action.payload.errors};
        case GENERATE_TOKEN_SUCCESS:
            return { ...state, token: action.payload.token, loginErrors: {}};
        default:
            return state;
    }
}
