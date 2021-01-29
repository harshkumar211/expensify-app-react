console.log("I am redux expensify");
import {createStore,combineReducers } from "redux";
import uuid from "uuid";
//ADD_EXPENSE
//Action Generator
const addExpense=(
    {description="",note="",amount=0,createdAt=0}={})=>({
    type:"ADD_EXPENSE",
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
//Action generator
const removeExpense = ({id}={})=>({
    type:"REMOVE_EXPENSE",
    id
});
//EDIT_EXPENSE

const editExpense = ({id,updates}={})=>({
    type:"EDIT_EXPENSE",
    id,
    updates

});
//SET_TEXT_FILTER

const setTextFilter=(text='')=>({
    type:"SET_TEXT_FILTER",
    text
});
//SORT_BY_DATE

const sortByDate = ()=>({
    type:"SORT_BY_DATE"
});
const sortByEnd_At = ()=>({
    type:"SORT_BY_END_AT"
});
const sortByStart_At = ()=>({
    type:"SORT_BY_START_AT"
});
//SORT_BY_AMOUNT
const sortByAmount = ()=>({
    type:"SORT_BY_AMOUNT"
});
//SET_START_AT
const setStartDate = (startDate)=>({
    type:"SET_START_DATE",
    startDate
});

const setEndDate = (endDate)=>({
    type:"SET_END_DATE",
    endDate
});
//SET_END_AT

//Expenses Reducer
const expensesReducerDefaultState=[];
const expensesReducer = (state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>id !== action.id);
        case "EDIT_EXPENSE":
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {...expense,...action.updates}; //use of spread operator to emrge the object
                }else{
                    return expense;
                }
            })
        default:
            return state;
    }
};

//filters reducers
//default value
const filtersReducerDefaultState={
    text:"",
    sortBy:"date",
    startDate:undefined,
    endDate:undefined

};
const filtersReducer = (state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy:'date'
            };
        case "SORT_BY_START_AT":
            return {
                ...state,
                sortBy:'startAt'
            };
        case "SORT_BY_END_AT":
            return {
                ...state,
                sortBy:'endAt'
            };
        case "SET_START_DATE":
            return {
                ...state,startDate:action.startDate
            };
        
        case "SET_END_DATE":
            return {
                ...state,endDate:action.endDate
            };
        default:
            return state;
    }
};

//get Visible Expenses

const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = (typeof startDate !== "number" || expense.createdAt >= startDate);
        const endDateMatch = (typeof endDate !== "number" || expense.createdAt <= endDate);
        const textMatch= expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1: -1;
        }
        if(sortBy === 'amount'){
            return a.amount > b.amount ? 1 : -1;
        }
    });
};
//store creation
//use of spread operator ...
//spread object along with spread array

const store=createStore(combineReducers({
    expenses:expensesReducer,
    filters:filtersReducer

}));
store.subscribe(()=>{
    const state=store.getState();
    const visibleExpense=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpense);
});

const expenseOne=store.dispatch(
    addExpense({description:"My Monthly Rent",note:"This is final settlement",
amount:100,createdAt:-11000}
));

const expenseTwo = store.dispatch(
    addExpense({description:"Cofffe",note:"This is Coffee",
amount:300,createdAt:-1000}
));

/*console.log(expenseTwo);

 const expenseDeleted=store.dispatch(removeExpense({id:expenseTwo.expense.id}));

store.dispatch(editExpense({id:expenseOne.expense.id,updates:{amount:5550}}));
console.log(store.getState());

store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());
*/
/* store.dispatch(setStartDate(0));
store.dispatch(setEndDate(1999)); */
//store.dispatch(sortByDate());
store.dispatch(sortByAmount());
const demoState={
    expenses:[{
        id:"jfkds",
        description:"January Rent",
        notes:"This was the final payment for rent",
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:"rent",
        sortBy:"date", //date,amount or createdAt
        startDate:undefined,
        endDate:undefined
    }
};

/* //spread object
const user={
    name:"Harsh",
    age:29
};
console.log({...user,location:'Koderma',age:27}); //for overriding use afterwards of spread operato
 */