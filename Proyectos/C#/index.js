var div = document.querySelector('#res');

/*for(var i=1; i<=100; i++){
    //console.log(i);
    div.innerHTML += i + '<br>';
    //div.innerHTML = div.innerHTML + i;
}*/

var fin = document.querySelector('#fin');
var outputDiv = document.querySelector('div');
fin.addEventListener("keypress", function(event){
    if(event.charCode == 13){ 
        div.innerHTML = ''; 
        for(var i=1; i<=5; i++){ 
            //fac = fac * i;
            //fac*= i;
            div.innerHTML += "<h1>Hola</h1>"; 
        }
        //div.innerHTML = fac;
    } 
});

for(var i=1; i<5; i=1+2){
    div.innerHTML += "<h" + i + ">Hola</h1" + i + ">";
}
