import { ActionTypes } from '../constants';
import ResponseType from '../models/responseType';
import { ActionGetMovie } from '../models/actionTypes';
import { ActionMoviesRetrieved } from '../models/actionTypes';

const initialState: any = {};
type Actions = ActionGetMovie | ActionMoviesRetrieved;

const MOVIE_REDUCER = (state = initialState, action: Actions): ResponseType => {
    const { type } = action;
    switch (type) {
        case ActionTypes.GET_MOVIES:
            return { ...state, loading: true };
        case ActionTypes.MOVIES_RETRIEVED:
            return { ...state, movie: action.data, loading: false }
        default:
            return state;
    }
};
export default MOVIE_REDUCER;
