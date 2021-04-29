import { combineReducers } from 'redux';
import user from './user'
import loading from './loading'
import location from './location'
import temperature from './temperature'

const rootReducer = combineReducers({
 user, loading, location, temperature
});


export default rootReducer;