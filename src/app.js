import React from 'react';
import ReactDOM from 'react-dom';

import {Provider } from "react-redux";
import {BrowserRouter,Route,Switch, Link,NavLink} from "react-router-dom";
import 'normalize.css';
import './styles/styles.scss';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store=configureStore();

store.dispatch(
    addExpense({description:"Water Bill",note:"This is water Bill",
amount:100,createdAt:1000}
));
store.dispatch(
    addExpense({description:"Gas Bill",note:"This is Gas Bill",
amount:1040,createdAt:2000}
));
store.dispatch(
    addExpense({description:"Rent",note:"This is Rent for Month July",
amount:5140,createdAt:4000}
));
store.dispatch(
    addExpense({description:"Grocery",note:"This is Grocery for Month July",
amount:3040,createdAt:5000}
));

//store.dispatch(setTextFilter('water'));

//to check the effect, lets use setTimeout
/* setTimeout(()=>{
    store.dispatch(setTextFilter('water'));
},3000); */

const state=store.getState();
const expenses = getVisibleExpenses(state.expenses,state.filters);
console.log(store.getState());
console.log("expenses filters",expenses);

const jsx= (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx,document.getElementById('app'));

