function scrollToMormon(){
    const libromormon=document.getElementById('seccion-libromormon');
    libromormon.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'nearest',
    });
};

function scrollToJoseSmith(){
    const josesmith=document.getElementById('seccion-josesmith');
    josesmith.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'nearest',
    });
};

function scrollToApostasia(){
    const apostasia=document.getElementById('seccion-apostasia');
    apostasia.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'nearest',
    });
};

function goPage(){
    const restauracion=document.querySelector('.pagina-restauracion');
    restauracion.addEventListener('click', () => {
        window.location.href="restauracion.html";
    })
}
