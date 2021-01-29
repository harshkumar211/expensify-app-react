export const setTextFilter=(text='')=>({
    type:"SET_TEXT_FILTER",
    text
});
//SORT_BY_DATE

export const sortByDate = ()=>({
    type:"SORT_BY_DATE"
});
const sortByEnd_At = ()=>({
    type:"SORT_BY_END_AT"
});
export const sortByStart_At = ()=>({
    type:"SORT_BY_START_AT"
});
//SORT_BY_AMOUNT
export const sortByAmount = ()=>({
    type:"SORT_BY_AMOUNT"
});
//SET_START_AT
export const setStartDate = (startDate)=>({
    type:"SET_START_DATE",
    startDate
});

export const setEndDate = (endDate)=>({
    type:"SET_END_DATE",
    endDate
});
//SET_END_AT
