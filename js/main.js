function openDiv() {
    const secciones = document.querySelectorAll('.creencias-seccion, #portada-creemos');

    secciones.forEach((seccion) => {
        seccion.addEventListener('click', () => {
            secciones.forEach((otraseccion) => {
                if (otraseccion==seccion) {
                    if (seccion.classList.contains('open')) {
                        seccion.classList.remove('open');
                    } else {
                        seccion.classList.add('open');
                    }
                } else {
                    otraseccion.classList.remove('close');
                    otraseccion.style.display = 'block';
                }
            });
            secciones.forEach((otraseccion) => {
                if (!otraseccion.classList.contains('open') && otraseccion!==seccion) {
                    otraseccion.classList.add('close');
                    setTimeout(() => {
                        otraseccion.style.display = 'none';
                    }, 500); 
                }
            });
        });
    });
}

openDiv();