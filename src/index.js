import React from 'react';
import { render } from 'react-dom';
import { css } from 'aphrodite';

import Header from './components/Header';
import Home from './components/Home';

import './index.scss';

class App extends React.Component {
  componentDidCatch(error, info) {
    console.error('Error in app', error, info);
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Home />
      </div>
    );
  }
}

render(<App />, document.getElementById("main"));
