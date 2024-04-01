function add(){
    var firstOp, secondOp, result;
    firstOp = document.getElementById('first').value;
    secondOp = document.getElementById('second').value;
    result = parseInt(firstOp) + parseInt(secondOp);
    window.alert("Addition of " + firstOp + " and " + secondOp + " is : " +result);
}
function substract(){
    var firstOp, secondOp, result;
    firstOp = document.getElementById('first').value;
    secondOp = document.getElementById('second').value;
    result = parseInt(firstOp) - parseInt(secondOp);
    window.alert("Substraction of " + firstOp + " and " + secondOp + " is : " +result);
}
function multiply(){
    var firstOp, secondOp, result;
    firstOp = document.getElementById('first').value;
    secondOp = document.getElementById('second').value;
    result = parseInt(firstOp) * parseInt(secondOp);
    window.alert("Multiplication of " + firstOp + " and " + secondOp + " is : " +result);
}
function divide(){
    var firstOp, secondOp, result;
    firstOp = document.getElementById('first').value;
    secondOp = document.getElementById('second').value;
    result = parseInt(firstOp) / parseInt(secondOp);
    window.alert("division of " + firstOp + " and " + secondOp + " is : " +result);
}
function module(){
    var firstOp, secondOp, result;
    firstOp = document.getElementById('first').value;
    secondOp = document.getElementById('second').value;
    result = parseInt(firstOp) % parseInt(secondOp);
    window.alert("modulus of " + firstOp + " and " + secondOp + " is : " +result);
}