function fizzbuzz(){
    for(i=1; i<=100; i++){
    if(i%3==0){
        alert("Fizz (divizibil cu 3 iar nr este " + i);
    }
    else if(i%5==0){
        alert("Buzz (divizibil cu 5 iar nr este " + i);
    }
    else if(i%3==0 && i%5==0){
        alert("Fizz Buzz (divizibil cu 3 si 5 iar nr este " + i);
    }
    else if(i%7==0){
        alert("Rizz (divizibil cu 7 iar nr este " + i);
    }
    else if(i%13==0){
        alert("Bizz (divizibil cu 13 iar nr este " + i);
    }
    else if(i%13==0 && i%7==0){
        alert("Rizz Bizz (divizibil cu 13&7), iar nr este " + i)
    }
    else{
        alert("Value of i is " + i);
    }
}
}