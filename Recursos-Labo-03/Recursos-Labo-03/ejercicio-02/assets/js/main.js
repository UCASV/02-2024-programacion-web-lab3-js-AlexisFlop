
const plus = (firstNumber, secondNumber) => {
    alert(firstNumber + secondNumber);
};
const subtract = (firstNumber, secondNumber) =>{
    alert(firstNumber-secondNumber);
} ;
const multiply = (firstNumber, secondNumber) =>{
    alert(firstNumber*secondNumber);
} ;
const split = (firstNumber, secondNumber) => {
    if(secondNumber == 0){
        alert("fuck u");
    }else{
        alert(firstNumber/ secondNumber);
    }

};
const requestNumber = (selectedOperation) => {
    const firstRequestedNumber = Number(prompt("Ingrese el primer numero:"));
    const secondRequestedNUmber = Number(prompt("Ingrese el segundo numero:"))
    if(isNaN(firstRequestedNumber) || isNaN(secondRequestedNUmber) ){
        alert("fuck u");
        return;
    }

    switch (selectedOperation) {
        case '*':
            multiply(firstRequestedNumber, secondRequestedNUmber);
            break;
    
        case '/':
            split(firstRequestedNumber, secondRequestedNUmber);
            break;    
        case '-':
            subtract(firstRequestedNumber, secondRequestedNUmber);
            break;
        case '+':
            plus(firstRequestedNumber, secondRequestedNUmber);
            break;
        default:
            alert("La operacion seleccionada no es una opcion");
            break;
    }
};

const selectOperation = () => {
    const selectedOperation = prompt("Seleccione la operacion que desea realizar (*, /, +. -): ")
    return selectedOperation;
    
};

const main = () => {
    requestNumber(selectOperation())
}

main();
