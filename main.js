import React from 'react'
import ReactDOM from 'react-dom'
import ProductCRUD from './ProductCRUD.jsx'
import FormAddProduct from './FormAddProduct.jsx'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import productApp from './reducers'
import App from './components/App.js'
import Root from './components/Root.jsx'
import ProductTable from './components/ProductTable.jsx'

let store = createStore(productApp)

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

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container')
);
