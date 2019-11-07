import React from 'react';

interface MovieComponentProps {
    getMovieData(): any;
    state: any
}

interface MyComponentState { }

export default class MovieComponent extends React.Component<MovieComponentProps, MyComponentState> {
    constructor(props: any) {
        super(props)
    }
    componentDidMount() {
        this.props.getMovieData();
    }
    render() {
        const results = this.props.state.GET_MOVIE_DATA.movie ? this.props.state.GET_MOVIE_DATA.movie.results : [];
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

