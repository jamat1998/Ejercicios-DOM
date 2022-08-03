import hamburgerMenu from "./menu_hamburguesa.js";
import { moverpelota } from './moverpelota.js';
import { reloj, alarma } from './reloj.js';
import scrolltop from "./boton_scroll.js";
import darkmode from "./darkmode.js";
const d= document;
d.addEventListener("DOMContentLoaded",(e)=>{   
    hamburgerMenu('.panel-btn','.panel','.menu a');
    reloj('#relojAlarma','.iniciarReloj','.detenerReloj')
    alarma('./song.mp3','.iniciarAlarma','.detenerAlarma')
    scrolltop('.btn','.fa-solid')
});

d.addEventListener('keydown',(e)=>{
    moverpelota(e,'.pelota','.fondo');
});

//LA EJECUTO AFUERA PARA TRABAJAR CON EL DOMCONTENTLOAD Y USAR EL LOCALSTORAGE.
darkmode('darkmode')   