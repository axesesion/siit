
/*  1)  O functie care compara 2 valori si returneaza true daca sunt egale si false daca nu sunt egale
    2)	O functie care compara 2 valori si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea
    3)	O functie care primeste 2 valori si returneaza maximul dintre cele 2
    4)	O functie care primeste 2 valori si returneaza minimul dintre cele 2
    5)	O functie care intoarce suma primelor N numere naturale pozitive
    6)	O functie care verifica daca N este numar prim (restul impartirii la 1 si la N ==0)
    7)	O functie care intoarce suma primelor N numere prime
    8)	O functie care primeste un parametru de tip string si intoarce inversul acestuia (abc => cba)
    9)	O functie care intoarce produsul primelor N numere impare pozitive
    10)	O functie care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array
    11)	O functie care intoarce maximul dintr-un array primit ca parametru
    12)	O functie care intoarce suma dintre max si min, dintr-un array primit ca parametru
    13)	O functie care verifica daca exista duplicate intr-un array primit ca parametru
    14)	O functie care intoarce produsul numerelor pozitive intr-un array primit ca parametru
    15)	O functie care verifica daca un string primit ca parametru este palindrom (inversul == originalul, ex: abcba == abcba, abca != acba
*/

1. //1)  O functie care compara 2 valori si returneaza true daca sunt egale si false daca nu sunt egale

function compara(a,b) {
    if(a==b){
        return true;
    }
    else return false;  
}

//2)	O functie care compara 2 valori si returneaza -1 daca primul e mai mic ca al doilea, 
//      0 daca sunt egale si 1 daca primul e mai mare ca al doilea
var a;
var b;
switch(true) {
    case (a<b):
        alert: ("-1")
        break;
    case (a==b)
        alert: ("0")
        break;
    case (a>b)
        alert: ("1")
        break;
}


//3) O functie care primeste 2 valori si returneaza maximul dintre cele 2
var x, y, max;
function max(x,y) {
    if(x>y){
        max=x;
    }
    else max=y;  
}
    //sau Varianta 2:
<p id="maxim"></p>
document.getElementById("maxim").innerHTML = Math.max(a,b);



//4 4)	O functie care primeste 2 valori si returneaza minimul dintre cele 2
var x, y, max;
function min() {
    if(x>y){
        min=y;
    }
    else max=x;  
}
    //sau Varianta 2:
<p id="minim"></p>
document.getElementById("minim").innerHTML = Math.min(x,y);


// 5) O functie care intoarce suma primelor N numere naturale pozitive
function sum(n){
    for(i=0;i<n;++i){
        suma = suma + i;
    }
    return suma;
}


//  6)	O functie care verifica daca N este numar prim (restul impartirii la 1 si la N ==0)
function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1;
  }