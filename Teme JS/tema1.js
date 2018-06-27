
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

 //1)  O functie care compara 2 valori si returneaza true daca sunt egale si false daca nu sunt egale

function compara(a,b) {
    if(a==b){
        return true;
    }else { 
        return false;  
    }
}

//2)	O functie care compara 2 valori si returneaza -1 daca primul e mai mic ca al doilea, 
//      0 daca sunt egale si 1 daca primul e mai mare ca al doilea
function schimba(a=3,b=1){

switch(true) {
    case (a<b):
        alert("-1");
        break;
    case (a==b):
        alert("0");
        break;
    case (a>b):
        alert("1");
        break;
}
}

//3) O functie care primeste 2 valori si returneaza maximul dintre cele 2

function max(x,y) {
    var max;
    if(x>y){
        max=x;
    }
    else max=y;  
    return max;
}
    //sau Varianta 2:
//<p id="maxim"></p>
//document.getElementById("maxim").innerHTML = Math.max(a,b);



// 4)	O functie care primeste 2 valori si returneaza minimul dintre cele 2

function min(x,y) {
    var min;
    if(x>y){
        min=y;
    }
    else min=x;  
    return min;
}
    //sau Varianta 2:
//<p id="minim"></p>
//document.getElementById("minim").innerHTML = Math.min(x,y);


// 5) O functie care intoarce suma primelor N numere naturale pozitive
function sum(n){
    var sum=0;
    for(i=0;i<=n;++i){
        if(i>=0){
        sum = sum + i;
    }
    }
    return sum;
}


//  6)	O functie care verifica daca N este numar prim (are exact doi divizori: numărul 1 și numărul în sine   restul impartirii la 1 si la N ==0)
function isPrime(nr) {
    for(var i = 2; i < nr; i++){
      if(nr % i === 0){ 
          return false; 
          break;
        }
    }
    //return num !== 1;
    return true;
  }


  //7)	O functie care intoarce suma primelor N numere prime
function isPrime2(nr) {
    for(var i = 2; i < nr; i++){
        if(nr % i === 0){ 
            return false;
        } else { return true;}
        
    }
    
}
function sumPrime(nr){
    var suma = 0;
    var counter = 0;
    var x=2;
    while(counter<nr) {
        if(isPrime(x)){
            suma = suma + x;
            counter = counter + 1;
        }
        x++;
    } alert (suma);
}

// 8. O functie care primeste un parametru de tip string si intoarce inversul acestuia (abc => cba)
function reverse1()
{
	var e = "abc";
	var s = new Array();
	var count = 0;
	var reverseCount = e.length-1;
	while(count<e.length && reverseCount>=0)
	{
		s.push(e[reverseCount]);
		
		reverseCount--;
		count++;
    } 
    var string= s.join("");
    return string; 
}
reverse1();


// 9 O functie care intoarce produsul primelor N numere impare pozitive
function prodImp(n){
    var prod=1;
    for(i=1;i<=n;i+=2){
        if(i>=0){
        prod = prod * i;
    }
    }
    return prod;
}


//10) O functie care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array

function verificaDoi(x,arr){
    var y=arr.length;
    for(var i=0; i<y; ++i){
        if(a[i] ==x) {
            return true;
        } 
    } return false;
}

// 11)	O functie care intoarce maximul dintr-un array primit ca parametru
function maxArr(){
    var sir = [1,4,6,8,9,10];
    var maxi=0;
    for(var i=0; i<sir.length; ++i){
        if(sir[i]>maxi){
            maxi = sir[i];

        }
    } console.log(maxi);
}

//12)	O functie care intoarce suma dintre max si min, dintr-un array primit ca parametru
function maxArr(){
    var sir = [1,2,-3];
    var maxi=0;
    var min;
    sumMM=0;
    for(var i=0; i<sir.length; ++i){
       if(sir[i]>maxi){
        maxi = sir[i];
       } 
       console.log(sir[i]);
       if(i==0){
        min = sir[i]; 
       }
        if(sir[i]<min){
        min = sir[i];     
            console.log(min);
        }
        sumMM=maxi + min;
    } console.log("Maximul este:", maxi);
    console.log("Minimul este:", min);
    console.log("Suma MM este:", sumMM);
}

// 13)	O functie care verifica daca exista duplicate intr-un array primit ca parametru
// Duplicatele intr-un array: true/
function f(arr){
    for(let i=0; i<arr.length; ++i) {
        for(let j=0; j<arr.length; ++j){
            if(arr[i]==a[j] && i!=j){
                return true;
            }
        } 
    }
    return false;

}

//14)	O functie care intoarce produsul numerelor pozitive intr-un array primit ca parametru
function f(arr){
    prodArr=1;
    for(let i=0; i<arr.length; ++i) {
        prodArr = prodArr * arr[i];
    }
    return prodArr;
}

//15)	O functie care verifica daca un string primit ca parametru este palindrom (inversul == originalul, ex: abcba == abcba, abca != acba
function palindrom(arr){
    lun = arr.length;
    for(var i=0; i<lun/2; ++i){
        if(arr.charAt(i) !== arr.charAt(lun - 1 - i)) {
            return false;
        }
    } 
    return true;
}
if (palindrom("abba")) {
    document.write("The word is a palindrome");
} else {
    document.write("The word is NOT a palindrome");
}
