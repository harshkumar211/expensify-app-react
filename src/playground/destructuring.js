console.log("destructuring");

const person = {
    name:"Harsh",
    age:29,
    location:{
        city:"delhi",
        temp:"37"
    }

}
/* onst name=person.name;
const age=person.age; */
const {name,age} = person;
console.log(`Name is ${name} and age is ${age}`);


const {city,temp}=person.location;

//here we can rename  using the colon to the property name
//const {city:hometown. temp:temperature}=person.location;

//set the default value 
//const {city="Noida"}=person.location;
//const {city:homecity="Noida"}=person.location;
if(city && temp)
    console.log(`its ${temp} in ${city}`);

const book={
    title:"Ego is the Enemy",
    author:"Ryan Holiday",
    publisher:{
        name:"Penguin"
    }
}
const {name:publisher="Anonymous"}=book.publisher;

console.log(`the publisher name is ${publisher}`)


//Array destructuring
//use square brcket for array
//use comma if u want to skip
const address=['59 modi muhalla','koderma','825109'];
console.log(address[0],address[1]); //this is not meaningful

const [house,,district]=address;
console.log(house,district);

//set default
const [,,,noitem="no item so default value"]=address;
console.log(noitem);
