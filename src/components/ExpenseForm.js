import React from "react";
import moment  from "moment";
import {SingleDatePicker} from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

const now=moment();
console.log(now.format('MMM Do, YYYY'));

class ExpenseForm extends React.Component{
   //define the default state
   constructor(props){
       super(props);
       this.state={
        description:props.expense? props.expense.description:'',
        note:props.expense? props.expense.note:'',
        amount:props.expense? (props.expense.amount/100).toString():'',
        createdAt:props.expense? moment(props.expense.createdAt): moment(),
        calendarFocused:false,
        error:''
    };
   }
    
    onDescriptionChange = (e)=>{
        const description=e.target.value;
        this.setState(()=>({

            description
        }));
    };
    onNoteChange = (e)=>{
        const note=e.target.value; // use the event.persist if you want to use inside the function
        this.setState(()=>({
            note
        }));
    };
    onAmountChange = (e)=>{
        const amount=e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({
                amount
            }));
        }
    };
    onDateChange = (createdAt)=>{
        if(createdAt)
            this.setState(()=>({
                createdAt
            }));
    };
    onFocusChange = ({focused})=>{
        this.setState(()=>({calendarFocused:focused}));
    };
    onSubmit = (e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            //set error message
            this.setState(()=>({error:'Please specify description and amount'}));
        }else{
            //clear the error.
            this.setState(()=>({error:''}));
            console.log("submitted");
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            })
        }
    };
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                    type="text" 
                    value={this.state.description} 
                    placeholder="Description" autoFocus
                    onChange={this.onDescriptionChange}></input>
                    <input type="text" 
                    placeholder="Amount" value={this.state.amount}
                    onChange={this.onAmountChange}
                    />

                    <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    onFocusChange={this.onFocusChange}
                    focused={this.state.calendarFocused}
                    numberOfMonths={1}
                    isOutsideRange={()=> false}/>

                    <textarea placeholder="Add an expense note here"
                    onChange={this.onNoteChange} value={this.state.note}></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    };
}
export default ExpenseForm;