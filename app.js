// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variable inicial
let amigos = []; // Nuestra lista de amigos a llenar


// Funciones

//Función para agregar amigos a una lista
function agregarAmigo(lista) {

    // Variable para guardar el nombre de cada amigo ingresado
    let nombreAmigo;

    // Obtener el valor del campo con id "amigo"
    nombreAmigo = document.getElementById("amigo").value;

    //Validar que el campo no está vacío
    if (nombreAmigo == "") {
        
        // Salir de la función si el campo está vacío
        return alert('Por favor, inserte un nombre');

    } else {

        // Limpiar el campo para agregar un nuevo amigo
        document.getElementById("amigo").value = '';

        // Agregar el nombre de cada amigo a la lista
        lista.push(nombreAmigo);

        // Invocamos a la funcion "mostrarAmigos" para ver la lista
        mostrarAmigos(lista);
        
        // Mostrar un mensaje de éxito al agregar un amigo
        return alert('Amigo agregado correctamente');
    }

}

// Función para mostrar la lista de amigos
function mostrarAmigos(listaAmigos) {

    // Obtener el elemento en el que se mostrará la lista de amigos
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista antes de mostrar a los nuevos amigos
    lista.innerHTML = '';

    // Recorrer la lista (arreglo) y agregar cada amigo como un elemento "li" de lista "ul"
    for (let contador = 0; contador < listaAmigos.length; contador++) {

        // Crear un elemento <li> para cada amigo y añadirlo al elemento <ul>
        let elementoLista = document.createElement("li");

        // Agregar el nombre del amigo al elemento "li"
        elementoLista.innerHTML = listaAmigos[contador];

        // Añadir el elemento "li" al elemento "ul" en la página HTML
        lista.appendChild(elementoLista);
    }
    return;
}

// Función para seleccionar a un amigo de la lista pseudo aleatoriamente
function sortearAmigo(lista) {

    // Variables
    let numeroAmigos = lista.length;  // Numero de amigos

    let indiceAmigoSorteado = Math.floor(Math.random() * numeroAmigos); // Indice o posicion del amigo secreto generado

    let nombreAmigo; // Nombre del amigo secreto

    let elementoResultado; // elemento "li"

    // Obtener el elemento en el que se mostrará el resultado del sorteo (ul)
    let listaResultado = document.getElementById("resultado");

    // Validar que haya amigos en la lista para sortear
    if (lista.length > 0) {

        nombreAmigo = lista[indiceAmigoSorteado]; // Guardar el nombre del amigo secreto por medio del indice generado

        elementoResultado = document.createElement('li'); // Se crea un elemento "li"

        elementoResultado.innerHTML = `El amigo secreto es: ${nombreAmigo}`; // Se agrega la frase al nuevo elemento creado "li"

        listaResultado.appendChild(elementoResultado); // inserta el elemento "li" con el texto del amigo secreto al elemento "ul"

        return;
    } else {
        
        // Si no hay amigos en la lista, se muestra un mensaje de alerta
        alert('No hay amigos para sortear');
        return;
    }
}

