/* let respuestaURL = "./A01T7-JARaposo.json"
const cliente = new XMLHttpRequest();

cliente.open("GET", respuestaURL);
cliente.responseType = "text";
cliente.send();

cliente.onload = function(){
    const alumnosText = cliente.response;
    const alumno = JSON.parse(alumnosText);
    mostrar(alumno);
    mostrar(alumnosText);
} 

-----------------------------------------------------
*/

/* alumnos();

async function alumnos(){
    const respuestaURL = "./A01T7-JARaposo.json"
    const cliente = new Request(respuestaURL);

    const respuesta = await fetch(cliente);
    const alumnosText = await respuesta.text();

    const alumnos = JSON.parse(alumnosText);
    mostrar(alumnos);
    mostrar(alumnosText);

} */



function mostrar(al){
    console.log(al);
}


