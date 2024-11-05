window.addEventListener('scroll', () => {
    const fixedheader = document.getElementById('fixedheader');

    if(window.scrollY>10) {
        fixedheader.classList.add('scrolled');
    }else{
        fixedheader.classList.remove('scrolled');
    }
});

fetch('header.html')
    .then(response=>response.text())
    .then(data=>{
        document.getElementById('header').innerHTML=data;

        const selected = document.getElementById('selected');
        const language = document.getElementById('language');

        selected.addEventListener('click', () => {
            language.classList.toggle('languages');
        })
    });