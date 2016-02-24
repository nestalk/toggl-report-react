import Immutable from 'immutable';
import {ActionTypes} from '../constants';

const initialState =
    Immutable.Map()
        .set('token', undefined)
        .set('date', undefined)
        .set('workHours', 8);

const settingsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case ActionTypes.GET_STORAGE_DATA:
            return state
                .set('token', action.token)
                .set('workHours', action.hours);
        case ActionTypes.SET_API_TOKEN:
            return state.set('token', action.token);
        case ActionTypes.SET_WORK_HOURS:
            return state.set('workHours', action.hours);
        case ActionTypes.SET_DATE:
            return state.set('date', action.date);
        default:
            return state;
    }
};

export default settingsReducer;
