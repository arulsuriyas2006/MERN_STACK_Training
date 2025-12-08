//<------- Anonymous Function-------->
let a = function(){
    console.log("Anonymous Function called");
}
console.log(a);
a();
let b =function(name,password){
    console.log(`Function with parameters called ${ name}  ${password}`);
}
b("Arul","1234");
let c = function(num1,num2){
console.log("Function with return type called");
  return [10,20,30,40];
    return num1 + num2;
}
console.log(c(10,20));



//< ---------- Named Function ---------->
function getuserDetails(empname,emprole,empsal,emppadd){
    console.log("This is named function");
    return `Employee Name: ${empname} , Employee Role: ${emprole}, Empployee salary: ${empsal},Emplyee Address: ${emppadd}`;
}
console.log(getuserDetails("arul","Developer",25000,"Chennai"));

//Imidiately Invoked Function Expression(IIFE)
(
function(name,password){
    console.log("IIFE function called");
    console.log(`Function with parameters called ${ name}  ${password}`);
    // return name + password;//does not show in console
}
)("Arul","1234");


//Arrow function
//rule 1
let arrow =()=>{
    let a=10;
    let b=20;
    console.log("Arrow function called value : "+(a+b));
}
arrow();
//rule 2
let fun1 =()=>{
    return "Arrow function with return type called";
}
// fun1();
console.log(fun1());
//rule 3
let fun2 =()=>{
    console.log(this);
    window.console.log("hello")
}
fun2();

//<------ nested function ------>
function outerfun(){
    let a =10
    console.log("Outer function called : ");   
    return function(){
        console.log(a);
    }   
}
let result = outerfun();
console.log(result);

//<------ higher order function  and callback function------>
function LandingPage(register,Login){
    console.log("Welcome to Landing Page");
}
function HomePage(){
    console.log("Welcome to Home Page");
}
function register(){
    console.log("Welcome to Register Page");
}
function Login(){
    console.log("Welcome to Login Page");
}
LandingPage(register(),Login());//1 register function called 2 login function called then landing page called

// generator function
function* genfun(){
    yield a=10;
    yield b=20;
    yield c=30
   console.log("Generator function called");
}
let r = genfun();
console.log(r.next().value);
console.log(r.next().value);
console.log(r.next().value);
r.next()


//