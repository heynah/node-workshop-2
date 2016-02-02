// function callcc (f,cc) { 
//   f(function(x,k) { cc(x) },cc)
// }

//No procedure is allowed to return to its caller--ever.

//One hint makes programming in this style possible:

//Procedures can take a callback to invoke upon their return value.

//When a procedure is ready to "return" to its caller, it invokes the "current 
//continuation" callback (provided by its caller) on the return value.

/*Example: Identity function

Consider the identity function written normally:

function id(x) {
  return x ;
}
and then in continuation-passing style:

function id(x,cc) {
  cc(x) ;
}
Sometimes, calling the current continuation argument ret makes its purpose more obvious:

function id(x,ret) {
  ret(x) ;
}


// cpsFirstLetter("Test string", firstLetter)

// function id(x) {
//   return x ;
// }
// // and then in continuation-passing style:

// function id(x,cc) {
//   cc(x) ;
// }

// console.log(id("word"))

*/

// var firstLetter = function(string){
//     return string.substr(0,1);
// }

function cpsFirstLetter(string, ret) {
    ret(string[0])
};


cpsFirstLetter("A string", ccLog)

function ccLog(ret){
    console.log(ret); //takes ret(string[0]) from above
}

function cpsLastLetter(string, ret) {
    ret(string[string.length-1])
    
};

cpsLastLetter("String-a", ccLog)

//getFirstAndLast("hello", function(newStr) { console.log(newStr); }); // should output "ho"

// function newStrFun(newStr) {
//     console.log(newStr);
// }

function getFirstAndLast(string, ret) {
    ret((string[0]) + (string[string.length-1]))
}

// getFirstAndLast('Hello I', function(newStr) { console.log(newStr); })

getFirstAndLast('Hello I', ccLog);





