import {Diagnostics} from '../../../diagnostics/models/diagnostics';
import {DiagnosticsAction} from '../actions/diagnostics-action';
import {LOAD_DIAGNOSTICS_SUCCESS} from '../actions/load-diagnostics-success';

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
