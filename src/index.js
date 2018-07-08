import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { reducer } from './budgetkeeperRedux'
const store = createStore(reducer)

const AppWithStore = (
    <Provider store={store}>
      <App />
    </Provider>
  )

ReactDOM.render(AppWithStore, document.getElementById('root'));
registerServiceWorker();
