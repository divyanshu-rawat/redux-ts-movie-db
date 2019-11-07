
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovieData } from '../../actions';
import MovieComponent from '../../components/movieComponent'

const mapStateToProps = (state: any) => {
    return { state };
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ getMovieData }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);

