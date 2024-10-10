//1 PAR O IMPAR:

function par(numero){
    if (numero % 2 === 0) {
        console.log( numero + " es par");
        
    } else {
        console.log( numero + " es impar");
    }
}


console.log(par(5));
console.log(par(4));

//2 MAYOR O MENOR:

function mayor(num1, num2){
    if (num1 > num2) {
        console.log( num1 + " es mayor que " + num2)
    } else if (num1 < num2){
        console.log(num2 + " es mayor que " + num1)
    } else{
        console.log("ambos números son iguales")
    }
}

console.log(mayor(5,6));
console.log(mayor(9,8));
console.log(mayor(4,4));

//3 MÚLTIPLO DE 5:

function multiplo(numero){
    if (numero % 5 === 0) {
        console.log(numero + " es multiplo de 5");
    } else {
        console.log(numero + " no es multiplo  de 5");
    }
}

console.log(multiplo(5));
console.log(multiplo(8)); 

//4 IMPRIMIR NÚMERO:

function imprimir(num){
    for (let i = 0; i <= num; i++){
        console.log(i)
    }
}

console.log(imprimir(7));

//5 IMPRIMIR PALABRA:

function wordloop(palabra, numero){
    for (let i = 0; i < numero; i++){
        console.log(palabra);
    }
}

wordloop("hola", 6);

//6 ARRAY:

function arrayvalue(arr){
    arr.forEach(function(valor) {
        console.log(valor);
    });
}

let myarray = [1,2,3];
arrayvalue(myarray);

//7 ARRAY 2:

function array5(arrr){
    for(let i = 0; i < arrr.length; i++) {
        if (i !== 4) {
            console.log(arrr[i]);
        }
    }
}

const diez = [1,2,3,4,5,6,7,8,9,10];
array5(diez);

//8 MULTIPLICACIÓN ARRAY:

function multi(array, numero){
    array.forEach(elemento => {
        console.log(elemento * numero);
    })
}

const numeros = [2,4,6,8];
const num = 3;
multi(numeros, num);