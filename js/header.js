window.addEventListener('scroll', () => {
    const fixedheader = document.getElementById('fixedheader');
    const gotop = document.getElementById('go-top');

    console.log("Scroll position:", window.scrollY);

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

function scrollToTop(){
    document.documentElement.scrollTop=0;
}

fetch('header.html')
    .then(response=>response.text())
    .then(data=>{
        document.getElementById('header').innerHTML=data;

        const selected = document.getElementById('selected');
        const language = document.getElementById('language');
        const gotop = document.getElementById('go-top');

        language.addEventListener('click', () => {
            language.classList.toggle('languages');
        })

    });