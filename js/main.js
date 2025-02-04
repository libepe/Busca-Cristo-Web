//LA IGLESIA RESTAURADA


function libroMormon(){
    const todosSubapartados=document.querySelectorAll('.subapartado');
    const subapartado=document.querySelector('.subapartado-libromormon');
    const libromormon=document.getElementById('seccion-libromormon');
    const josesmith=document.getElementById('seccion-josesmith');
    const apostasia=document.getElementById('seccion-apostasia');

    todosSubapartados.forEach(el=>el.classList.remove("escoge-menu"));

    libromormon.classList.add("escoge");
    libromormon.classList.remove("seccion-default");
    josesmith.classList.remove("escoge");
    apostasia.classList.remove("escoge");

    if (libromormon.classList.contains("escoge")) {
        subapartado.classList.add("escoge-menu");
    }
};

function joseSmith(){
    const todosSubapartados=document.querySelectorAll('.subapartado');
    const subapartado=document.querySelector('.subapartado-josesmith');
    const libromormon=document.getElementById('seccion-libromormon');
    const josesmith=document.getElementById('seccion-josesmith');
    const apostasia=document.getElementById('seccion-apostasia');

    todosSubapartados.forEach(el=>el.classList.remove("escoge-menu"));

    josesmith.classList.add("escoge");
    libromormon.classList.remove("seccion-default","escoge");
    apostasia.classList.remove("escoge");

    if (josesmith.classList.contains("escoge")) {
        subapartado.classList.add("escoge-menu");
    }
};

function laApostasia(){
    const todosSubapartados=document.querySelectorAll('.subapartado');
    const subapartado=document.querySelector('.subapartado-apostasia');
    const libromormon=document.getElementById('seccion-libromormon');
    const josesmith=document.getElementById('seccion-josesmith');
    const apostasia=document.getElementById('seccion-apostasia');

    todosSubapartados.forEach(el=>el.classList.remove("escoge-menu"));

    apostasia.classList.add("escoge");
    josesmith.classList.remove("escoge");
    libromormon.classList.remove("escoge","seccion-default");

    if (apostasia.classList.contains("escoge")) {
        subapartado.classList.add("escoge-menu");
    }

    
};


//SENDA DE LOS CONVENIOS

function abreConvenio(){
    const convenio=document.querySelectorAll('.convenio');
    for(let i=0;i<convenio.length;i++){
        convenio[i].addEventListener('click',function(){
            convenio[i].classList.toggle('rotar');
        });
    }
};
abreConvenio();





