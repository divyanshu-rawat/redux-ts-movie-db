import TypeMovie from '../models/typeMovie';
import { ActionTypes } from '../constants';


const initialState: any = {};

const MOVIE_REDUCER = (state = initialState, action: TypeMovie): any => {
    switch (action.type) {
        case ActionTypes.GET_MOVIES:
            return { ...state, loading: true };
        case ActionTypes.MOVIES_RETRIEVED:
            return { ...state, movie: action.data, loading: false }
        default:
            return state;
    }
};
export default MOVIE_REDUCER;
