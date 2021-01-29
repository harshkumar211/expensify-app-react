const expensesReducerDefaultState=[];
export default (state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !== action.id);
        case "EDIT_EXPENSE":
            console.log("EDIT expense called",action);
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
