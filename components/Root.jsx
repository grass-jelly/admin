import React from 'react'
import AddProduct from '../containers/AddProduct'
import VisibleProductTable from '../containers/VisibleProductTable'
import Admin from './Admin'

export default class Root extends React.Component {
    // display(currentPath) {
    //     if (currentPath.includes('/product-table'))
    //         return <VisibleProductTable />
    //     else if (currentPath.includes('/add-product'))
    //         return <AddProduct />
    //     return <Admin />
    // }

    render() {
        let currentPath = window.location.pathname
        return (
            <div>
                <div>
                    <a href="/product-table">Products</a>
                    <a href="/add-product">Add Product</a>
                </div>
                {currentPath.includes('/add-product')?
                <AddProduct /> :
                <VisibleProductTable />
                }
            </div>
        )
    }
}

