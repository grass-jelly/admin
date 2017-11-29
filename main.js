import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import adminApp from './reducers'
import App from './components/App.js'
import Root from './components/Root.jsx'
import thunk from 'redux-thunk'
import { fetchProducts, fetchProductTypes } from './actions'

let store = createStore(adminApp, applyMiddleware(thunk))
store.dispatch(fetchProductTypes())
store.dispatch(fetchProducts())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container')
);
