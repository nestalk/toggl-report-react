import {ActionTypes} from './constants';
import {toggleReport} from './api';

const getReport = (dispatch, state, values) => {
    const token = values.token || state.get('settings').get('token');
    const workHours = values.workHours || state.get('settings').get('workHours');
    const date = values.date || state.get('settings').get('date');
    if (token && token.length===32 && date && workHours){
        return dispatch(toggleReport(token,date,workHours));
    }
    return Promise.resolve();
};

export const getStorageData = () => {
    const token = localStorage.getItem('api-token');
    const hours = localStorage.getItem('work-hours');
    return {
        type: ActionTypes.GET_STORAGE_DATA,
        token: token,
        hours: hours
    };
};

export const setApiToken= (token) => {
    return (dispatch, getState) => {
        localStorage.setItem('api-token', token);
        dispatch({
            type: ActionTypes.SET_API_TOKEN,
            token: token
        });
        return getReport(dispatch, getState(), {token: token});
    };
};

export const setWorkHours= (hours) => {
    return (dispatch, getState) => {
        localStorage.setItem('work-hours', hours);
        dispatch({
            type: ActionTypes.SET_WORK_HOURS,
            hours: hours
        });
        return getReport(dispatch, getState(), {hours: hours});
    };
};

export const setDate = (date) => {
    return (dispatch, getState) => {
        dispatch({
            type: ActionTypes.SET_DATE,
            date: date
        });
        return getReport(dispatch, getState(), {date: date});
    };
};

export const reportSuccess = (report) => {
    return {
        type: ActionTypes.REPORT_SUCCESS,
        report: report
    };
};

export const reportError = (error) => {
    return {
        type: ActionTypes.REPORT_ERROR,
        error: error
    };
};
