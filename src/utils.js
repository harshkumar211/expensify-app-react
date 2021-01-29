
console.log('utils.js is running');

const square=(x)=>x*x;

const add =(a,b)=>a+b;

//export {square,add,subtract as default};
//two types of exports
//1. default exports : There could be 0 or 1 default export, we can call it anything we want
//export {square,add};
//2. export individual variable.  inline export: export const add=(a,b)=>a+b
//export square=(x)=>x*x;

const subtract=(a,b)=>a-b;


export default (a,b)=>a-b;
