import React from "react";
import {connect} from "react-redux";
import filters from "../reducers/filters";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
const ExpenseList=(props)=>(
    <div>
    <h1>Expense List </h1>
    {props.name}
    {props.expenses.length >0 && 
    props.expenses.map((expense)=>{
        return (
            //here use of spread operator
            <ExpenseListItem {...expense} key={expense.id}/>
        );
    })}
    </div>
);

const mapStateToProps=(state)=>{
    return {
        expenses:selectExpenses(state.expenses,state.filters)
    };
};
export default connect(mapStateToProps)(ExpenseList);
