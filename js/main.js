document.addEventListener('DOMContentLoaded', () => {
    slideShow();
});

//UNA IGLESIA RESTAURADA

function expandeSeccion(){
    const secciones=document.querySelectorAll('.seccion-titulo');
    secciones.forEach((seccion) => {
        seccion.addEventListener('click', function(){
            const texto=this.closest('.seccion').querySelector('.seccion-texto');
            const flecha=this.querySelector('.fa-solid');

            if(texto){
                texto.classList.toggle('expande');
            }

            if(flecha){
                flecha.classList.toggle('gira');
            }
        })
    })
}
expandeSeccion();


//ACERCATE A CRISTO

function abreConvenio(){
    const convenios=document.querySelectorAll('.convenio');

    convenios.forEach((convenio) => {
        convenio.addEventListener('click',function(){
            convenio.classList.toggle('rotar');
        })
    })

};
abreConvenio();

//ALL
function efectoMantenido(event) {
    console.log('Pointer Down');
    if (event.button === 0 || event.pointerType === "touch") {
        event.currentTarget.classList.add('mantener');
    }
}

function efectoNoMantenido(event) {
    console.log('Pointer Up');
    if (event.button === 0 || event.pointerType === "touch") {
        event.currentTarget.classList.remove('mantener');
    }
}


const divClicks=document.querySelectorAll('.convenio-front, .pagina');


divClicks.forEach((div) => {
    div.addEventListener('pointerdown', efectoMantenido);
    div.addEventListener('pointerup', efectoNoMantenido);
    div.addEventListener('pointerleave', efectoNoMantenido);
    div.addEventListener('pointercancel', efectoNoMantenido);
});




//HOME

function slideShow(){
    const fondohomes=document.querySelectorAll('.fondohome');

    let i=0;

    fondohomes.forEach((el, index) => {
        el.style.opacity=index==0 ? '1':'0';
    });

    setInterval(()=>{
        fondohomes[i].style.opacity='0';
        i=(i + 1) % fondohomes.length;
        fondohomes[i].style.opacity='1';
    }, 3000)

};











