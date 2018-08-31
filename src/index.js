import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';
import './index.scss';

class App extends React.Component {
  componentDidCatch(error, info) {
    console.error('Error in app', error, info);
  }
  render() {
    return (
      <div className="main">
        <Header />
        <Home />
      </div>
    );
  }
}

render(<App />, document.getElementById("main"));
