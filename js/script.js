function mostrar(idsesion){

    //ocultar sesiones
    var sesiones =document.getElementsByTagName("section")
    for(var i=0; i <sesiones.length;i++ 
    )

   {sesiones[i].style.display="none";} 

//visualice las sesiones 
var sesiones=document.getElementById(idsesion);
sesiones.style.display="block";


}