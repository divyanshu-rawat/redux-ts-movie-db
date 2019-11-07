import TypeMovie from '../models/typeMovie';



const initialState: any = {};

const MOVIE_REDUCER = (state = initialState, action: TypeMovie): any => {
    switch (action.type) {
        case 'GET_MOVIES':
            return { ...state, loading: true };
        case 'MOVIES_RECEIVED':
            return { ...state, movie: action.data, loading: false }
        default:
            return state;
    }
};
export default MOVIE_REDUCER;
