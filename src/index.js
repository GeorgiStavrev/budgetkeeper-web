import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { reducer } from './budgetkeeperRedux'

const store = createStore(reducer, applyMiddleware(thunk, logger))

const AppWithStore = (
    <Provider store={store}>
      <App />
    </Provider>
  )

ReactDOM.render(AppWithStore, document.getElementById('root'));
registerServiceWorker();
