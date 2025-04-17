// function declaration 
//============basic structure for function declaration===========
// function demo(){
//     console.log("hello");
//     console.log(typeof(demo));
// }
//============function declaration using varible===========
// let demo=function(){
//     console.log(typeof(demo));

// }
//============function declaration using arrow===========
// let demo=()=>{
//     console.log("hello using arrow");
// }
// demo();
// ===============function with parameters and without parameters============
// let add=function(a,b){ 
//     console.log(a+b);
// }
// add(3,8);
// let mul=function(){ 
//     let a=10;
//     let b=89
//     console.log(a*b);
// }
// mul();
//============Function with default parameters================================
// let div=function(m,n=2){
//     console.log(m/n);

// }
// div(4)
//=============IIFE(Imidiately invoked functon expression)==========================================================
// (
//     function demo(){
//         console.log("hello anas");
//     }
// )();
// (
//     function add(){
//         console.log(2+4);
//     }
// )();
//!===========function closure============
// function add1(no1,no2){
//     let sum=no1+no2;
//     console.log("addition of"+sum);
//     return function(no3){
//         let mul=no1*no2*no3;
//         return mul;
//     }
// }
//===============anonymous function============================
let app=function(){
    console.log("this is anas khan");
}
app();
//----------------anonymous function using arrow---------------
//single line statement
let app=(a)=>{console.log("Single line statement")}

