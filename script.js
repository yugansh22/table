
function printtable(number){
    
    var table = '';
    for(var i=1;i<=10;i++){
       
        table = table +  number +" X "+ i + " = " + number*i + "<br>";
    } 
    
    document.getElementById("out").innerHTML = table;
}