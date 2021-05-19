/* Crear una base de datos de 5 personas donde almacene: nombre, edad, genero, correo*/

function datosPersonales(){
    let nombre1 =document.getElementById("nombre").value
    let edad1 =document.getElementById("edad").value
    let genero1 =document.getElementById("genero").value
    let correo1 =document.getElementById("correo").value
    let dato =SessionStorage.getItem("valor")
    let datosPer 
    let datosPer1 
    datosPer1=[nombre1,edad1,genero1,correo1]
    datosPer =[SessionStorage.getItem("valor")]
    datosPer = datosPer.concat(datosPer1)
    SessionStorage.setItem("valor",datosPer)
}


/* Crear una pagina donde me permita guardar notas y poder observarlas posteriormente*/
function guardar_nota(){
    let nota = document.getElementById("form_user").value
    let contador = 0
    let contenido =""
    nombre_var=""
    if(SessionStorage.getItem("contadorNota") == null){
        SessionStorage.setItem("contadorNota",1)
        SessionStorage.setItem("nota", nota)
        contador = 1
    }else{
        contador =SessionStorage.getItem("contadorNota")
        conatdor = parseInt(contador)+1
        SessionStorage.setItem("contadorNota", contador)
        SessionStorage.setItem("nota"+ contador, nota)
        nombre_var ="nota"+contador
        contenido =SessionStorage.getItem(nombre_var)
    }
    let contenedor_notas = document.getElementById("nota_guardadas")
    contenedor_notas.innerHTML +="<p>"+contenido+"</p>"
}


