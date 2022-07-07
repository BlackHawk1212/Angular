// ## Difference between Let and Var ##

// The main difference between let and var is that scope of a variable defined with let is limited 
// to the block in which it is declared while variable declared with var has the global scope. 
// So we can say that var is rather a keyword which defines a variable globally regardless of block scope.


function doSome() {

    var aa = 1;
    let a = 100;

    if(a > 50){
        let b = 200;
        console.log(a);
        console.log(b);
    }
    console.log(a);
}