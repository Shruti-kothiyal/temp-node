//Modules - encapsulated code(only share minimum)

const sayHi=require("./3-moduleFuc")
const names=require("./4-moduleObjectOrVariable")


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

const data=require("./5-alternateModuleArrayObjectPass")
console.log(data)

require("./6-ModuleFunctionDirectCall")
//when you import a module you actually invoke it, and code is executed if it contains a function
/*when we have a function inside the module that we invoke, the code will run even though we didnt 
assign it to a variable, even when we didnt use a variable*/