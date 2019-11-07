import React from 'react';

interface MovieComponentProps {
    getMovieData(): any;
}

interface MyComponentState { }

export default class MovieComponent extends React.Component<MovieComponentProps, MyComponentState> {
    constructor(props: any) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props.getMovieData());
    }
    render() {
        return (
            <div>
                <p>Hey!</p>
            </div>
        )
    }
}

