import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
import { MovieContainer } from './containers/movieContainer';

/**
 * Why TypeScript?
    - Code Suggestions.
    - Highlight the errors as early as possible.
    - Self-documenting code.
    - TypeScript = JavaScript + some amazing stuff.
 */


class AppContainer extends React.Component {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <div>
        <MovieContainer />
      </div>
    )
  }
}

export default hot(module)(AppContainer);
