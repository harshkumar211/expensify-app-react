import React from "react";
import {connect} from "react-redux";
import { editExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";
import {removeExpense} from "../actions/expenses";
const EditExpensePage=(props)=>{
    console.log(props);
    return (
    <div>
    <ExpenseForm 
    expense={props.expense}
    onSubmit={(expense)=>{
    console.log("It is edited",expense,props);
    props.dispatch(editExpense({id:props.expense.id,updates:expense}));
    props.history.push('/');
    }}/>
    <button onClick={()=>{
        props.dispatch(removeExpense({id:props.expense.id}));
        props.history.push('/');
    }}>Remove</button>
    </div>
)};

//it will recieve the props and we can manipulate afer that
const mapStatesToProps =(state,props)=>{
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};
export default connect(mapStatesToProps)(EditExpensePage);
