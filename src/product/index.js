import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductList from './product_list'
import ProductDetail from './product_detail'

export default function ProductRouter() {
    return (
        <Switch>
            <Route exact path="/product" component={ProductList} />
            <Route exact path="/product/:productId" component={ProductDetail} />
        </Switch>
    )
}