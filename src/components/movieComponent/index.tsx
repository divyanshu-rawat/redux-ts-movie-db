import React, { PureComponent } from 'react';
import { AppState } from '../../rootReducer';
import { ActionGetMovie } from '../../models/actionTypes';
import { MovieComponentProperties } from '../../containers/movieContainer/movieContainer';
interface MovieComponentState { }

export default class MovieComponent extends PureComponent<MovieComponentProperties, MovieComponentState> {
    constructor(props: any) {
        super(props)
    }
    componentDidMount() {
        this.props.getMovieAction();
    }
    render() {
        const results = this.props.state.movie ? this.props.state.movie.results : [];
        return (
            <nav>
                <ul>
                    {results.map(({ id, title }: any) => (
                        <li key={id}>
                            <p>{title}</p>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

