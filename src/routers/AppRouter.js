import {BrowserRouter,Route,Switch, Link,NavLink} from "react-router-dom";
import React from 'react';

import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import EditExpensePage from "../components/EditExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/HeaderPage";

const AppRouter=()=>(
<BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" exact={true} component={ExpenseDashboardPage}></Route>
            <Route path="/create" exact={true} component={AddExpensePage}/>
            <Route path="/edit/:id" exact={true} component={EditExpensePage}/>
            <Route path="/help" exact={true} component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;
