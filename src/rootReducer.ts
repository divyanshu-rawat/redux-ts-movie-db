import { combineReducers } from "redux";
import MOVIE_REDUCER from './reducers/';
import { ActionTypes } from './constants';

const rootReducer = combineReducers({
    [ActionTypes.GET_MOVIES]: MOVIE_REDUCER,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;