/* Crear una base de datos de 5 personas donde almacene: nombre, edad, genero, correo*/

function datosPersonales(){
    let nombre1 =document.getElementById("nombre").value
    let edad1 =document.getElementById("edad").value
    let genero1 =document.getElementById("genero").value
    let correo1 =document.getElementById("correo").value
    let dato =localStorage.getItem("valor")
    let datosPer 
    let datosPer1 
    datosPer1=[nombre1,edad1,genero1,correo1]
    datosPer =[localStorage.getItem("valor")]
    datosPer = datosPer.concat(datosPer1)
    localStorage.setItem("valor",datosPer)
}


/* Crear una pagina donde me permita guardar notas y poder observarlas posteriormente*/
function guardar_nota(){
    let nota = document.getElementById("form_user").value
    let contador = 0
    let contenido =""
    nombre_var=""
    if(localStorage.getItem("contadorNota") == null){
        localStorage.setItem("contadorNota",1)
        localStorage.setItem("nota", nota)
        contador = 1
    }else{
        contador =localStorage.getItem("contadorNota")
        conatdor = parseInt(contador)+1
        localStorage.setItem("contadorNota", contador)
        localStorage.setItem("nota"+ contador, nota)
        nombre_var ="nota"+contador
        contenido =localStorage.getItem(nombre_var)
    }
    let contenedor_notas = document.getElementById("nota_guardadas")
    contenedor_notas.innerHTML +="<p>"+contenido+"</p>"
}


