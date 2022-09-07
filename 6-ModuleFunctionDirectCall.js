const num1=20
const num2=30

function addsum(){
    console.log(`Sum is ${num1+num2}`)
}

addsum()    //invoking the function
/*when we have a function inside the module that we invoke, the code will run even though we didnt 
assign it to a variable, even when we didnt use a variable*/
//when the node exports, it actually wraps it in a function
