
setInterval( () => {
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds(); 

    if (segundos <= '9') {
        document.querySelector('.segundos').innerHTML = `0${segundos}`;
    } else {
        document.querySelector('.segundos').innerHTML = `${segundos}`;
    }

    if (minutos <= '9') {
        document.querySelector('.minuto').innerHTML = `0${minutos}`;
    }
     else {
        document.querySelector('.minuto').innerHTML = `${minutos}`;
    }

    if (horas <= '9') {
        document.querySelector('.hora').innerHTML = `0${horas}`;
    } else {
        document.querySelector('.hora').innerHTML = `${horas}`;
    }

}, 100);

