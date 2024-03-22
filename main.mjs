// Problem 1 \\
let city = prompt("Enter City Name");
if (city == "karachi"){
    console.log(`Welcome to city of lights`)
}

// Problem 2 \\
let gender = prompt(("Enter Your Gender:"));

if(gender == "male"){
    console.log(`Good Morning Sir`);
}else {
    console.log(`Good Morning Ma'am`);
}
// Problem 3 \\
let signalColor = prompt("Enter Color of road traffic signal")

if (signalColor === "red"){
    console.log(`Must Stop`)
}
else if (signalColor === "yellow"){
    console.log(`Ready To Move`)
}else{
    console.log(`Move Now`)
}

// Problem 4 \\
let remainingFuel = prompt("Enter Remaining Fuel in Litres:");

if(remainingFuel < 0.25){
    console.log(`Please refill the fuel in your car`)
}else{
    console.log(`baba saeen bhut petrol hai`)
}

// Problem 5 \\

let a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}


// It Doesnot Show Alert Because Of Post Increment
let b = 82;
if (b++ === 83){
alert("given condition for variable b is true");}


let c = 12;
if (c++ === 13){
alert("condition 1 is true");
}

if (c === 13){
alert("condition 2 is true");
}

if (++c < 14){
alert("condition 3 is true");
}

if(c === 14){
alert("condition 4 is true");
}

let materialCost = 20000;
let laborCost = 2000;

let totalCost = materialCost + laborCost;
console.log(totalCost)  
//    22000   ===   2000    +  20000
if (totalCost === laborCost + materialCost)// 22000 = 22000
{
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

// Problem 6\\
let englishMarksObt =parseFloat(prompt("Enter Your English Marks:"));
let urduMarksObt = parseFloat(prompt("Enter Your Urdu Marks:"));
let islamiatMarksObt = parseFloat(prompt("Enter Your Islamiat Marks:"));

let totalMarks = 300;
console.log(`Total Marks: ${totalMarks}`)
let markObt = parseFloat(englishMarksObt + urduMarksObt + islamiatMarksObt);
console.log(`Marks Obtained: ${markObt}`)
let percentage = (markObt/totalMarks)*100;
console.log(`Percentage : ${percentage}`)
if (percentage >= 80){
    console.log(`Grade : A-one`)
    console.log("Excellent");
}else if(percentage >= 70){
    console.log(`Grade : A`)
    console.log("Good");
}else if(percentage >= 60){
    console.log(`Grade : B`)
    console.log("You need to improve");
}else{
    console.log(`Grade : Fail`)
    console.log("Sorry");
}

//Problem 7\\
let userNumber = parseInt(prompt("Guess any Number"));

if (userNumber <= 0 || userNumber <=10){
    console.log("Bingo! Correct Answer")
}else{
    console.log("Close enough to Correct Answer");
}

//Problem 8\\
let number = parseInt(prompt("Enter Any Number"));
if(number % 3 === 0){
    console.log("Number is Divisible 3")
}else{
    console.log("Number is not Divisible By 3")
}

//Problem 9\\
let checkNumber = parseInt(prompt("Enter any number:"));
if (checkNumber % 2 === 0) {
    console.log("Even Number")
} else if (checkNumber % 3 === 0) {
    console.log("Odd Number");
} else {
    console.log("number is not even or odd");
}

//Problem 10\\
let temp = parseFloat(prompt("Enter temperature"));
if (temp >= 40) {
    console.log("It is too hot outside.");
}else if(temp >= 30){
    console.log("The Weather today is Normal.")
}else if(temp >= 20){
    console.log("Today’s Weather is cool.")
}else{
    console.log("OMG! Today’s weather is so Cool.")
}

// //Problem 11\\
let number1 = parseFloat(prompt("Enter First Number"));
let number2 = parseFloat(prompt("Enter Second Number"));
let operator = prompt("Enter Following Operator + , - , * , / , & % ");
let calculator = parseInt(number1 + operator + number2);//Issue To Resolve
alert(`${number1} ${operator} ${number2} = ${calculator}`)