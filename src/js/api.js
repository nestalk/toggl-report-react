import fetch from 'isomorphic-fetch';
import * as Actions from './actions';

export const toggleReport = (token, date, workHours) => {
    return dispatch => {
        const url = `http://nestalk-toggl-fsharp.azurewebsites.net/?workhours=${workHours}&date=${date.format('YYYY-MM-DD')}&token=${token}`;
        return fetch(url, {mode: 'cors'})
            .then(
                (response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    return Promise.reject(response.statusText);
                })
            .then(
                (json) => dispatch(Actions.reportSuccess(json)),
                (error) => dispatch(Actions.reportError(error))
            );
    };
};
