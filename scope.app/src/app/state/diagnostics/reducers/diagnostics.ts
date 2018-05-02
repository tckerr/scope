import {Diagnostics} from '../../../diagnostics/models/diagnostics';
import {DiagnosticsAction, LOAD_DIAGNOSTICS_SUCCESS} from '../actions/diagnostics';

export interface State {
    diagnostics: Diagnostics;
}

const defaultState: State = {
    diagnostics: null
};

export function reducer(state: State = defaultState, action: DiagnosticsAction) {
    switch (action.type) {
        case LOAD_DIAGNOSTICS_SUCCESS:
            return { ...state, diagnostics: action.payload };
        default:
            return state;
    }
}
