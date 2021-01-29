import {createStore} from "redux";


/* const add=({a,b})=>{
    return a + b;
}
console.log(add({a:1,b:12})); */
//Action generator , will be a function which returns a function , error will be easy to catch, typo error
//payload should have default value {}
const incrementCount=({incrementBy=1}={})=>{
    return({
        type:"INCREMENT",
        incrementBy
    })
}
const decrementCount=({decrementBy=1}={})=>{
    return({
        type:"DECREMENT",
        decrementBy
    })
}

const resetCount=()=>{
    return ({
        type:"RESET"
    })
}

const setCount=({count=1}={})=>{
    return ({
        type:"SET",
        count
    })
}


//Reducer which will be passed to create the store.
//Reducers are pure functions
//impure functions are those who has dependency outside of function scope. Here result is beign consumed
// let result=0;
//const add=(a,b){
   // result=a+b;
   //return result;
//}

const countReducer = (state = {count:0},action)=>{
        switch(action.type){
            case 'INCREMENT':
                return ({
                    count:state.count + action.incrementBy
                });
            case 'DECREMENT':
                return ({
                    count:state.count - action.decrementBy
                });
            case 'RESET':
                return ({
                    count:0
                });
            case 'SET':
                return ({
                    count:(typeof action.count === 'number' ? action.count : 0)
                });
            default:
                return state;
        }
    };
const store=createStore(countReducer);
const unsubscribe= store.subscribe(()=>{
    console.log(store.getState());
});
//Action than an object which gets sent to store
//Increment //decrement //reset
//disptch is function which sent the action to store
store.dispatch(incrementCount());

store.dispatch(resetCount());
//now pass some params
store.dispatch(incrementCount({incrementBy:5}))

//unsubscribe from the chnges
//unsubscribe();

store.dispatch({
    type:"RESET"

});
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:19}));

store.dispatch({
    type:"SET",
    count:101

});
store.dispatch(resetCount());
store.dispatch(setCount({count:1002}));

//subscribe watch store


 
