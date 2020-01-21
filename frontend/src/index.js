import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import BobList from './component/BobList';

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <BobList />
        </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
