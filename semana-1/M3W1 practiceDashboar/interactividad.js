const buttonGreeting = document.getElementById("buttonGreeting");
const inputName = document.getElementById ("inputName");
const waitingForInput = document.getElementById ("waitingForInput");




buttonGreeting.addEventListener("click", () => {
    const nombre = inputName.value; // aquí tomo lo que la persona escribió
    if (nombre ==="") {
        alert ("Por favor, ingresa tu nombre ");
    } else {
        waitingForInput.textContent = `Hola ${nombre} bienvenid@, 👋🌸🫀👾`;
    }

    
});

// contador Simple
let counter = 0;


const buttonAdd = document.getElementById ("buttonAdd");
const buttonRemove = document.getElementById ("buttonRemove");
const buttonReset = document.getElementById ("buttonReset");
const valueCounter = document.getElementById ("valueCounter");

buttonAdd.addEventListener("click", () => {
    counter ++;
    valueCounter.textContent = counter;

});

buttonRemove.addEventListener("click", () => {
    
    if (counter > 0)  {
        counter--;
        valueCounter.textContent = counter;
    }
});

buttonReset.addEventListener("click", () => {
    if (counter = "0" ) {
        counter = 0;
        valueCounter.textContent = counter
    }
});



console.log ("click")




// Validacion Edad

let edad = "0"

const writeAge = document.getElementById ("writeAge");
const buttonAge = document.getElementById ("buttonAge");
const accessGranted = document.getElementById ("accessGranted");

buttonAge.addEventListener ("click", () => {
    const edad = writeAge.value  // .value saca lo que la persona escribio en la variable 

    
    if (edad >= 18 ) {
    accessGranted.textContent = "Hola 👋 eres mayor de edad"; 
        console.log("Hola 👋 eres mayor de edad ")
                                 // .textContent en este caso dice que le estamos agregando "Eres mayor de edad" a la variable accessGranted para que se muestre en pantalla

                                 //Al hacer accessGranted.textContent = "Eres mayor de edad"; le estamos diciendo al navegador: “pon este texto dentro del elemento para que se muestre en pantalla”.

    } else {
        accessGranted.textContent = "Hola 👋 Eres menor de edad.";
        console.log("Hola 👋 Eres menor de edad. ")
    }

    accessGranted.style.display = "block";  
                                // muestro la cajita que esta escondida con .style.display  Oye accessGranted, cambia tu estilo y muéstrate en pantalla”
    });




// Modo Dark 


// 1 linea . buscamos en el interruptor en el HTML

// 2 linea. Oye, elemento toggle te voy a poner un oído pegado (addEventListener) para cuando notes un cambio (change)" 
    
 //3 linea. abras este sobre (() => { ... }) y hagas lo que dice adentro.

const toggle = document.getElementById('darkmode-toggle');
toggle.addEventListener('change', () => {
    document.documentElement.classList.toggle('dark');
});



// Task Manager (escribir tarea)

const taskInput = document.getElementById ("taskInput")
const addBtn = document.getElementById ("addBtn")
const taskList = document.getElementById ("taskList")


addBtn.addEventListener ("click", () => {
const newTask = taskInput.value;   
    if (newTask  ==="") {
        alert("Por favor ingresa la nueva tarea, campo requerido");

        } else {
        const newTaskDiv = document.createElement ("div");

        newTaskDiv.textContent = newTask;
        taskList.appendChild(newTaskDiv);
    
        newTaskDiv.className = "flex items-center justify-between p-3 rounded-lg border border-[#f0f2f4] dark:border-gray-700 bg-white dark:bg-[#101922] hover:border-primary/50 transition-colors group/item"
        
        

            checkboxDiv = document.createElement("div");

            checkboxDiv.className = "size-5 rounded border border-gray-300 dark:border-gray-600 flex items-center justify-center cursor-pointer hover:border-primary"

            newTaskDiv.appendChild(checkboxDiv) // asi se anidan los elementos
            


            taskText = document.createElement("span");
            taskText.textContent = newTask
            
            newTaskDiv.appendChild(taskText);
            

            taskList.appendChild(newTaskDiv); /* Aquí, taskList es el contenedor grande que veo en mi pantalla (donde viven todas las tareas) y newTaskDiv es el paquete que acabamos de armar con su cuadrito y su texto. */
        
        
        taskInput.value = ""; // esta linea es para volver a dejar el input vacio  
        
            
}}) 


// newTask es una nueva variable es donde guardo o capto lo que la otra persona escribio (digo aqui lo tengo en newtask)
// con .value obtengo lo que el usuario escribio, lo capto

/* (else) queremos que la tarea aparezca físicamente en la lista. Para esto, JavaScript necesita seguir tres pasos dentro del else:

1. Crear un nuevo elemento con una variable llamada newTaskDiv (un div o un span).

2. Asignarle el texto que guardamos en newTask.

3. Meterlo dentro de nuestro contenedor taskList.

Para el primer paso, usamos una función llamada document.createElement('div'). 

4. luego creamos una nueva variable en este caso se llama nuevaTareaDiv que va a crear el elemento div 

    En JavaScript, cuando usas el signo =, le estás diciendo a la computadora: "Toma lo que está a la derecha y guárdalo en lo que está a la izquierda".

5. creamos una nueva variable para el cuadrito del ckeck...Al escribir document.createElement("div"), le estoy diciendo al navegador: "Crea un nuevo bloque de tipo div en la memoria". La variable checkboxDiv es el nombre que usaremos en nuestro código para referirnos a ese bloque específico.


    Para que el usuario pueda verlos juntos (el cuadro que contiene la tarea y el cuadrito del check), debemos convertir al checkboxDiv en un "hijo" del newTaskDiv. En el DOM, esto crea una jerarquía donde un elemento vive dentro de otro.

6 Para que el cuadrito y el texto convivan como hermanos, necesitamos crear un elemento separado para el texto de la tarea. Vamos a crearlo 

    Vamos a crear un elemento de tipo span para que contenga el mensaje que escribió el usuario (la variable newTask).

    Creamos el espacio para el texto (taskText) y le asignamos lo que escribió el usuario.
    Unimos el cuadrito y el texto dentro del contenedor principal.

7. Al escribir newTaskDiv.appendChild(taskText), estoy colocando el texto justo después del cuadrito dentro de la caja principal. 📦
hacemos la limpieza del imput 



*/ 

