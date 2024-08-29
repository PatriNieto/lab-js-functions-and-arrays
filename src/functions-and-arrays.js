// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2){
        return num1
    } else if(num1 < num2) {
        return num2
    } else {
        return num1
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayToLook) {

    if(arrayToLook.length === 0){

        return null

    } else if (arrayToLook.length === 1) {

        return arrayToLook[0]

    } else {
        
        //ya sabemos que al menos un elemento tiene asique lo colocamos en la variable temporal
        let stringMasLargo = arrayToLook[0]
        //console.log("esto"  + typeof stringMasLargo);
        //variable para descargar cada una de las posiciones del array
        let otraStringTemporalParaComparar = ""
        

        //bucle para recorrer el array, empiezo desde 1 porque 0 ya lo tenemos como el mas largo
        for(let i = 1; i < arrayToLook.length; i++) {
             
            otraStringTemporalParaComparar = arrayToLook[i]
            

            if( stringMasLargo.length < otraStringTemporalParaComparar.length) {

                stringMasLargo = otraStringTemporalParaComparar

                
            }
        }
        return stringMasLargo
    }
}






// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayEsperado) {

    //returns the sums of all the numbers of the array

    let suma = 0;

    if(arrayEsperado.length === 0 ){
        return suma
    } else {
        for(let i = 0; i <arrayEsperado.length; i++ ){
            suma += arrayEsperado[i]
        }
        return suma
    }
    

}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayDeNumeros) {
    //tenemos que hacer un caso especial para el array vacio porque no reconoce 0/0 un numero
    if(arrayDeNumeros.length === 0){
        return 0
    } 
    let suma = sumNumbers(arrayDeNumeros);
    let media = suma / arrayDeNumeros.length
    
    return media
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToSearch) {
    if(arrayOfWords.length === 0){
        return null
    } else {
        for(let i = 0; i < arrayOfWords.length; i++){
            if(arrayOfWords[i] === wordToSearch){
                return true
            }
        }
    } return false
}
