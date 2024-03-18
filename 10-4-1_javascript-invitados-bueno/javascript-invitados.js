// INVITADOS FIESTA ESTE FINDE

// Montas una fiesta este finde en tu casa!
// Tienes una lista de invitados ya fija en array (o bien creada mediante Prompt)
// – Te llama la Juani que se apunta con su novio Alex
// – Te encuentras a Marta que dice que le cueles la tercera
// – Roberto, que estaba el primero de la lista, resulta que está de viaje y no puede venir
// – Hay una fiesta al lado la misma noche y toda esa gente dicen que se apuntan a tu fiesta
// – Mostrar la lista definitiva de invitados con todos los nombres en mayúsculas.
// – Además, con tanto lío, acabas realizando una función de buscar, que te dice si tal persona está en la lista o
// no

// A cada paso debe ir actualizándose la presentación en pantalla de la lista de invitados. Tómate tu tiempo para repasar todo lo visto hasta ahora. Intenta crear una página visualmente atractiva.

const invitadosFiestaInicial = ["Roberto", "David", "Albert", "Herman", "Ferdi", "Francisco", "Juan Carlos", "Walid", "Rifi", "Laia"];
console.log(invitadosFiestaInicial);

const fiestaCasaLado = ["Eric", "Pol", "Martí", "Laia", "Guille", "Laura"];
console.log(fiestaCasaLado);

const invitadosFiestaFinal = invitadosFiestaInicial.concat(fiestaCasaLado);
console.log(invitadosFiestaFinal);

function button1(){

    let lista1 = document.getElementById("lista-invitados");

    invitadosFiestaInicial.push("Juani", "Alex");
    
    for (let i = 0; i < invitadosFiestaInicial.length; i++){
        lista1.innerHTML += invitadosFiestaInicial[i].toUpperCase() + "<br>";
        console.log(invitadosFiestaInicial[i]);
    }

    lista1.style.fontFamily ="Arial";
}

function button2(){

    let lista2 = document.getElementById("lista-invitados");

    lista2.innerHTML = "";

    invitadosFiestaInicial.splice(3,0,"Marta"),
    console.log(invitadosFiestaInicial);
    invitadosFiestaInicial.shift();
    console.log(invitadosFiestaInicial);

    for (let i = 0; i < invitadosFiestaInicial.length; i++){
        lista2.innerHTML += invitadosFiestaInicial[i].toUpperCase() + "<br>";
        console.log(invitadosFiestaInicial[i]);
    }

    lista2.style.fontFamily.toUpperCase() ="Arial";
}

function button3(){

    let lista3 = document.getElementById("lista-invitados");

    lista3.innerHTML = "";

    for (let i = 0; i < invitadosFiestaFinal.length; i++){
        lista3.innerHTML += invitadosFiestaFinal[i].toUpperCase() + "<br>";
        console.log(invitadosFiestaFinal[i]);
    }

    lista3.style.fontFamily.toUpperCase() ="Arial";
}

function button4(){

    let lista4 = document.getElementById("lista-invitados");

    lista4.innerHTML = "";

    for (let i = 0; i < invitadosFiestaFinal.length; i++){
        lista4.innerHTML += invitadosFiestaFinal[i].toUpperCase() + "<br>";
        console.log(invitadosFiestaFinal[i]);
    }

    lista4.style.fontFamily.toUpperCase() ="Arial";
}


function buscador(){
   
    let nombreBuscador = document.getElementById("buscador").value.toLowerCase();

    console.log("Nombre buscado:", nombreBuscador);

    console.log("Invitados:", invitadosFiestaFinal);

    let nombreEncontrado = false;
   
    for (let i=0; i < invitadosFiestaFinal.length; i++){
        if (invitadosFiestaFinal[i].toLowerCase() === nombreBuscador){
            nombreEncontrado = true;
        }
    }

    if (nombreEncontrado){
        alert("Este nombre esta en la lista de invitados!");
    } else {
        alert("Este nombre no esta en la lista de invitados!");
    }

}