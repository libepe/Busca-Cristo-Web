fetch('header.html')
    .then(response=>response.text())
    .then(data=>{
        document.getElementById('header').innerHTML=data;

            const language=document.getElementById('language');
            const selected=document.getElementById('selected');

            selected.addEventListener('click', () => {
                language.classList.toggle('languages');
            });
    });

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
    })};

window.addEventListener('scroll', () => {
    const fixedheader=document.getElementById('fixedheader');
    const gotop=document.getElementById('go-top');

    if(window.scrollY>10) {
        fixedheader.classList.add('scrolled');
    }else{
        fixedheader.classList.remove('scrolled'); 
    }

    if(window.scrollY>=500){
        gotop.classList.add('scrolltop');
    }else{
        gotop.classList.remove('scrolltop');
    }

});