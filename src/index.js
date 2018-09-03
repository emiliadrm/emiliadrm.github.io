import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import { reducer } from './reducers';
import { watcherSaga } from './sagas';

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

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();
let store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(watcherSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById("main"));
