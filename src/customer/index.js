import React from "react";
import { Route, Switch } from "react-router-dom";
import CustomerList from './customer_list'
import CustomerDetail from './customer_detail'

export default function ProductRouter() {
    return (
        <Switch>
            <Route exact path="/customer" component={CustomerList} />
            <Route exact path="/customer/:customerId" component={CustomerDetail} />
        </Switch>
    )
}