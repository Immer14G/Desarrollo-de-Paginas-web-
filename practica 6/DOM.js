//obtener elemento por el id
let parrafo = document.getElementById(miParrafo);
console.log(parrafo.textContent);

let boton = document.getElementById(miBoton);
boton.addEventListener("click",function(){
    parrafo.textContent = "Texto actualizado";
    console.log(parrafo.textContent);

})
