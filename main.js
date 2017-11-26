import React from 'react'
import ReactDOM from 'react-dom'
import ProductCRUD from './ProductCRUD.jsx'
import FormAddProduct from './FormAddProduct.jsx'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import productApp from './reducers'
import App from './components/App.js'
import Root from './components/Root.jsx'
import ProductTable from './components/ProductTable.jsx'
import thunk from 'redux-thunk'
import { fetchProducts } from './actions'

// const PRODUCTS = [
//     {id: 1, name: 'p1', price: '$29.99', description: 'a product', 
//     brand: 'Originals', producer: 'adidas', imageUrl: '#'},
//     {id: 2, name: 'p2', price: '$39.99', description: 'a product', 
//     brand: 'NEO', producer: 'adidas', imageUrl: '#'},
// ];

// ReactDOM.render(
//     <ProductTable products={PRODUCTS} />,
//     document.getElementById('container')
// )

let store = createStore(productApp, applyMiddleware(thunk))
store.dispatch(fetchProducts())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container')
);
