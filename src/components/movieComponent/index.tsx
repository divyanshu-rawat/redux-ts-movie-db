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
        console.log('<!!!!!!!!!<', this.props.state);
        return (
            <div>
                <p>Hey!</p>
            </div>
        )
    }
}

