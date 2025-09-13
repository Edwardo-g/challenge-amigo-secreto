// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value
    if (amigo == "" || amigo == " "){
        alert('Por favor, inserte un nombre.');
    }else {
        amigos.push(amigo);
        console.log(amigos);
        document.getElementById('amigo').value = "";
        actualizarListaAmigos();
    }
}
function actualizarListaAmigos(){
   let lista = document.getElementById('listaAmigos')
   lista.innerHTML = ""
   for (var i = 0; i < amigos.length; i++){
    let nuevoAmigo = document.createElement('li')
    nuevoAmigo.textContent = amigos[i];
    lista.appendChild(nuevoAmigo);
   }
}
function sortearAmigo(){
   if (amigos.length == 0){
    alert("Debe agregar amigos para sortear");
   } else{
    
    let numeroAmigo = Math.floor(Math.random() * amigos.length)
    
    let amigoSelect = amigos[numeroAmigo];
    
    let resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `El amigo selecionado es: ${amigoSelect}`;
   }
}
