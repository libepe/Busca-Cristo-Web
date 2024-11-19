function OpenDiv(){
    const creencias=document.getElementsByClassName('creencias-seccion');
    for(let i=0;i<creencias.length;i++){
        creencias[i].addEventListener('click',() => {
            creencias[i].classList.toggle('open');
        });
    }
};

OpenDiv();
