import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

import Header from './components/Header';
import Home from './components/Home';

import './index.scss';

class App extends React.Component {
  componentDidCatch(error, info) {
    console.error('Error in app', error, info);
  }
  render() {
    return (
      <div className={css(styles.main)}>
        <Header />
        <Home />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    width: '80%',
    margin: '0 auto',
  }
});

render(<App />, document.getElementById("main"));
