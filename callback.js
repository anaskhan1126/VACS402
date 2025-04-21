//Callback function==A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// function display(some){
//     console.log(some);
// }
// function add(a,b){
//     let sum=a+b;
//     // return sum;
//     display(sum);
// }
// add(4,7);
// function A(){
//     console.log("First grade A");
// }
// function B(){
//     console.log("Second grade B");
// }function C(){
//     console.log("Third grade C");
// }
// A();
// setTimeout(B,1000);
// C();
// function A(){
//     console.log("First grade A");

// }function C(){
//     console.log("Third grade C");
// }
// A();
// setTimeout(()=>console.log("Second Grade B"),1000);   
// C();
function display(some){
    console.log("Result is ${some}");
}
function cal(a,b,cb){
    let sum=a+b;
    cb(sum);
}
cal(5,4,display)



