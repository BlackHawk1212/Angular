var salaries = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var response = salaries.map(function (x) {
    console.log(x);
    x = x + 10;
    return x;
});
console.log(response);
// let users:User[] = {
//     {id:1, name:"test123"}
// }
