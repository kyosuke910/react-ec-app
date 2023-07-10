import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './reducks/store/store'
// import * as serviceWorker from './serviceWorker'
import App from './App.jsx'
import { ConnectedRouter } from 'connected-react-router'
import * as History from 'history'

const history = History.createBrowserHistory()
export const store = createStore(history)

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)