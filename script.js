// Selecciona header  
let header = document.querySelector('header');  
// Selecciona enlaces de navegación  
let navLinks = document.querySelectorAll('.nav-link');  

//Cambio estilos al hacer scroll  
function changeHeaderStyleOnScroll() {  
    // Verifica posición del scroll  
    if (window.scrollY > 400) {  
        // Cambia el fondo a blanco  
        header.style.backgroundColor = '#FFFFFF';  

        // Cambia el color de los enlaces a azul  
        navLinks.forEach(link => {  
            link.style.color = '#2F3645';  
        });  
    } else {  
        // Restaura los estilos originales  
        header.style.backgroundColor = 'transparent';  

        navLinks.forEach(link => {  
            link.style.color = '#FFFFFF'; // Color original (blanco)  
        });  
    }  
}  

// Agrega un evento que se dispara al hacer scroll  
window.addEventListener('scroll', changeHeaderStyleOnScroll);

//Animación para botones de video
let botonPlay = document.querySelector(".play");

let botonFin = document.querySelector(".pausa");

let video = document.querySelector(".video-play");

botonPlay.addEventListener("click", ()=> {
    video.play ()
});

botonFin.addEventListener("click", ()=> {
    video.pause ()
});

//Temporizador del video

let videot = document.getElementById('miVideo');  
    let tiempoVideo = document.getElementById('tiempoVideo');  
   // Actualiza el tiempo mostrado  
    function actualizarTiempo() {  
        let tiempoActual = video.currentTime; // Tiempo actual en segundos  
        let minutos = Math.floor(tiempoActual / 60);  
        let segundos = Math.floor(tiempoActual % 60);  
        tiempoVideo.textContent = ` ${minutos}:${segundos < 10 ? '0' : ''}${segundos}`; // Muestra tiempo  
    }  

    // Escucha el evento timeupdate para actualizar el tiempo en tiempo real  
    videot.addEventListener('timeupdate', actualizarTiempo);  

    // Duración inicial  
    videot.addEventListener('loadedmetadata', () => {  
        let duracion = video.duration;  
        let minutosDuracion = Math.floor(duracion / 60);  
        let segundosDuracion = Math.floor(duracion % 60);  
        tiempoVideo.textContent += ` ${minutosDuracion}:${segundosDuracion < 10 ? '0' : ''}${segundosDuracion}`;  
    });  

//ROMPECABEZAS

// Soltar
function allowDrop(ev) {  
    ev.preventDefault();  
}  

function drag(ev) {  
    ev.dataTransfer.setData("text", ev.target.id);  
}  

function drop(ev) {  
    ev.preventDefault();  
    var data = ev.dataTransfer.getData("text");  
    var droppedElement = document.getElementById(data);  
    
    // Verifica coincidencia 
    if ((droppedElement.id === "rompe1" && ev.target.id === "0") ||   
        (droppedElement.id === "rompe2" && ev.target.id === "1") ||   
        (droppedElement.id === "rompe3" && ev.target.id === "2")) {  
        
        // Muever imagen  
        ev.target.appendChild(droppedElement);  

         
        var arrasText = ev.target.querySelector(".arras");  
        if (arrasText) {  
            arrasText.remove();  
        }  
    }  
}  

//Reiniciar el juego  
function reiniciar() {  
    // Mover a su lugar original  
    var rompe1 = document.getElementById("rompe1");  
    var rompe2 = document.getElementById("rompe2");  
    var rompe3 = document.getElementById("rompe3");  

    var rompeContainer = document.querySelector(".rompe");  
    
    rompeContainer.appendChild(rompe1);  
    rompeContainer.appendChild(rompe2);  
    rompeContainer.appendChild(rompe3);  
    
    // Vuelve a mostrar el texto en los cuadros  
    var cuadros = document.querySelectorAll(".vacio > div");  
    cuadros.forEach(cuadro => {  
        if (!cuadro.querySelector(".arrastre")) {  
            var p = document.createElement("p");  
            p.className = "arrastre";  
            p.style.color = "#FFFFFF"; // Asegura el color del texto    
            cuadro.appendChild(p);  
        }  
    });  
}  

// Asigna los eventos a las imágenes y zonas de destino  
document.getElementById("rompe1").addEventListener("dragstart", drag);  
document.getElementById("rompe2").addEventListener("dragstart", drag);  
document.getElementById("rompe3").addEventListener("dragstart", drag);  