import {combineReducers} from 'redux-immutablejs';
import settings from './settingsReducer';

const indexReducer = combineReducers({
    settings
});

export default indexReducer;
