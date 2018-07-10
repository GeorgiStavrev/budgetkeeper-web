import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { reducer } from './budgetkeeperRedux'
import thunk from 'redux-thunk'
it('renders without crashing', () => {
  
  const store = createStore(reducer, applyMiddleware(thunk))
  
  const AppWithStore = (
      <Provider store={store}>
        <App />
      </Provider>
    )

  const div = document.createElement('div');
  ReactDOM.render(AppWithStore, div);
  ReactDOM.unmountComponentAtNode(div);
});
