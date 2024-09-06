const searchNumber = (reqNumber, numberList) => {
    let indexNumber = numberList.indexOf(reqNumber);
    if(indexNumber == -1){
        alert("El numero " + reqNumber + " no se encuentra en el arreglo");
    }
    else{
        alert("El numero " +reqNumber+ " se encuentra en la posicion: "+ indexNumber);
    }
}

const requestNumber = () => {
    const selectedNumber = Number(prompt("Ingrese el numero que desea buscar en el arreglo: "))
    console.log(selectedNumber);
    return selectedNumber;

}

const main = () => {
    let numbersList  =  [1, 2, 3, 4, 5, 7, 10, 50]
    const requestedNumber = requestNumber();
    searchNumber(requestedNumber, numbersList);
    
}

main();
