const app = document.getElementById("app")

function renderHome(){  // el render + variable  que tengo en el html lo que hace es que  funcione el boton al hacerle click cumple una funcionalidad 
    app.innerHTML = "<h1>home<h1><p>Bienvenido a nuestra SPA</>";
}

function renderServices() {
    app.innerHTML = "<h1>Servicios</h1><p>Fronted con JS </>";
}

function renderContact() {
    app.innerHTML = "<h1>Contacto</h1><p>clan@hamilton</>";
}

document.getElementById("home").addEventListener("click", renderHome);
document.getElementById("services").addEventListener("click", renderServices);
document.getElementById("contact").addEventListener("click", renderContact);


function renderNoFound() {
    app.innerHTML = "<h1> X 404</h1><p>Pagina no encontrada </>";
}

function router () {
    const route = location.hash;   // creo una funcion ruta y el location.hash; me ayuda a  a cambiar el url de los botonos y esto va en con la funcion # tanto en html como en el javascript 


switch (route) {
    case "#/home":
        renderHome();
        break;

    case "#/services":
        renderServices();
        break;

    case "#/contact":
        renderServices();
        break;
    default:
        renderHome(); 
    }
}


// Los eventos que nos vana permitir obtener ese valor cada vez qur haya un cambio en la funcion hash va a ejecutar
// la funcion route


window.addEventListener ("hashchange, routing)")
window.addEventListener("load routing")