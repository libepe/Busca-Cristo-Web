document.addEventListener('DOMContentLoaded', () => {
    const headerDiv=document.getElementById('header');
    if (!headerDiv) {
        console.error("#header not found!");
        return;
    }

    loadHeader();
    loadFooter();

    window.addEventListener('scroll', handleScroll);

    const goTopButton = document.getElementById('go-top');
    if (goTopButton) {
        goTopButton.addEventListener('click', scrollToTop);
    }

});

//HEADER and FOOTER loaders

function loadHeader() {
    const headerDiv=document.getElementById('header');
    fetch('header.html')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.text();
        })
        .then(data => {
            headerDiv.innerHTML=data;
            menuMovil();
        })
        .catch(error => console.error("Error loading header:", error));
}


function loadFooter(){
    const footerDiv=document.getElementById('footer');
    fetch('footer.html')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.text();
        })
        .then(data => {
            footerDiv.innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
}

//HEADER

function setupLanguageToggle() {
    const language = document.getElementById('language');
    const selected = document.getElementById('selected');

    if (language && selected) {
        selected.addEventListener('click', () => {
            language.classList.toggle('languages');
        });
    } else {
        console.error("Either language or selected is missing!");
    }
}


function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
})};


function handleScroll() {
    const fixedheader = document.getElementById('fixedheader');
    const gotop = document.getElementById('go-top');

    if (fixedheader) {
        fixedheader.classList.toggle('scrolled', window.scrollY > 10);
    }

    if (gotop) {
        gotop.classList.toggle('scrolltop', window.scrollY >= 500);
    }
}


function menuMovil(){
    const barras=document.getElementById('barras');
    const menu=document.getElementById('menu');
    const fixedheader=document.getElementById('fixedheader');

    barras.addEventListener('click',()=>{
        menu.classList.toggle('abremenu');

        if(menu.classList.contains('abremenu')){
            fixedheader.style.backgroundColor='rgb(45,81,92)';
        }else{
            fixedheader.style.backgroundColor='';
        }
    })
}




