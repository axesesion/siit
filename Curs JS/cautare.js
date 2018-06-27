// cautare binara: se imparte in 2 si apelezi functia  
var sir = [1,2,3,5,7,9];
function f(sir, numarDeCautat){
  var jum= sir[parseInt(sir.length/2)];
    //console.log(jum);
    if(jum == numarDeCautat){
        return true;
    }
    else {
        if(sir.length>1){
            var sirStanga = sir.slice(0, sir.length/2)
            var sirDreapta = sir.slice(length/2, sir.length)
            if(numarDeCautat<jum)
            {
                f(sirStanga, numarDeCautat);
            } 
            else 
            {
                f(sirDreapta, numarDeCautat)
            } 

        }    
       
    }
}