
import { connect } from 'react-redux';
import { bindActionCreators, AnyAction, Dispatch } from 'redux';
import { getMovieAction } from '../../actions';
import MovieComponent from '../../components/movieComponent';
import { AppState } from '../../rootReducer';

const mapStateToProps = (state: AppState) => {
    return { state: state.GET_MOVIES };
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({ getMovieAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export type MovieComponentProperties = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;