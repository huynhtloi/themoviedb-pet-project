import { combineReducers } from 'redux'
import movie from './movie'

const appReducer = combineReducers({
    movie,
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
