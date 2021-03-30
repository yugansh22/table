function printtable(){
    var number = document.getElementById("start").value;
  
    var upto =  document.getElementById("end").value;
   
   
    var table = '';
    for(var i=1;i<=upto;i++){
       
        table = table +  number +" X "+ i + " = " + number*i + "<br>";
    } 
    
    document.getElementById("out").innerHTML = table;
  return false;
}