import Immutable from 'immutable';
import {ActionTypes} from '../constants';

const initialState = Immutable.List();

const reportReducer = (state = initialState, action)=> {
    switch (action.type) {
        case ActionTypes.REPORT_SUCCESS:
            return Immutable.List(action.report);
        case ActionTypes.REPORT_ERROR:
            return Immutable.List();
        default:
            return state;
    }
};

export default reportReducer;
