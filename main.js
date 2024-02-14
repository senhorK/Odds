






Rdo = function(){
  banca -= Number(stkk.value);
  bc.innerHTML = banca;
  
  var o = ops[Math.floor(Math.random() * ops.length)];
  
  if(o != ops[1]){
    R += `<li class="lsss1"> ${o} ✅</li>`;
    c1++;
    banca += Number((stkk.value * oddd.value));
    stkk.value = 1;
    galyy.innerHTML = stkk.value;
  }
  else{   
     R += `<li class="lsss2"> ${o} ↔️</li>`;
     c2++;
     
     if(banca > 0){
        if(Number(stkk.value) < 36){
          stkk.value = Number(stkk.value) * galy;
          galyy.innerHTML = stkk.value;
        }
     }
     else {
       stkk.value = 1;
       galyy.innerHTML = stkk.value;
     }
     
  } 
  
  //var v1 = Math.trunc((c1 / 100) * Number(tto.value));
  //var v2 = Math.trunc((c2 / 100) * Number(tto.value));
  
  lsP.innerHTML = R;
  centage1.innerHTML = Math.round((c1 / Number(tto.value)) * 100) +"%";      
  centage2.innerHTML = Math.round((c2 / Number(tto.value)) * 100) +"%";
 
  b = String(banca).substr(0,5); 
  bc.innerHTML = b;
}


var banca = 0;
var b;
var galy =2;
var R = "";
var cont = 0;
var c1 = 0;
var c2 = 0;
var ops =["Casa", "Empate" ,"Fora"];

Roda = function(){
 
  
  
 banca = Number(bc.innerHTML);
 b = String(banca).substr(0,5); 
 bc.innerHTML = b;
 
 if(banca <= 0){
   banca = 100;
   b = String(banca).substr(0, 5);
   bc.innerHTML = b;
 }
 
 
 
 c1 = 0;
 c2 = 0;
 
 
 
 cont = 0;
 R = "";
 lsP.innerHTML = R;
 centage1.innerHTML = c1;
 centage2.innerHTML = c2;
 
 
  
  var interval = setInterval(function(){
      Rdo();
      cont++;
      conttt.innerHTML = cont;
      
      if(cont >= Number(tto.value) || 
         Number(bc.innerHTML <= 0)) clearInterval(interval);
      
  }, 10)
  
  
}




Ok.addEventListener("click", Roda)