import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboardPage=(props)=>{
    //console.log("props recieved ",props);
    return (
    <div>
    <ExpenseListFilters />
        <ExpenseList />
    </div>
)};

export default ExpenseDashboardPage;