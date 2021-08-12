'use strict';

let horas = 0; // variable para cambiea la hora

const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

const mostrarReloj = () => {
    let fecha = new Date();
    fecha.setHours(fecha.getHours() + horas); // sumamos las horas para cambiar la fecha
    
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;
    
    let diaSemana = dias[fecha.getDay()]; // dia de la semana con valor numerico
    let dia = fecha.getDate(); // valor numerico del dia
    let mes = meses[fecha.getMonth()];
    let anio = fecha.getFullYear();
    document.getElementById('fecha').innerHTML = `${diaSemana}, ${dia} ${mes} ${anio}`;

    // funcion toggle lo que hace es si esta lo quita, si no esta aplica
    //document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (valor) => {
    if(valor < 10) valor = `0${valor}`;
    return valor;
};

document.getElementById('caja').innerHTML = 
            `© Copyright ${new Date().getFullYear()} | Todos los derechos reservados |
             Desarrollado por A. Derkachev 07/2021`;

// cuando se carga la pagina muestra reloj en seguida
mostrarReloj(); // hace lo mismo que onload en este caso
setInterval(mostrarReloj, 1000);
