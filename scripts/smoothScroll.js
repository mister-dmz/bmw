document.addEventListener('DOMContentLoaded', () => {
    let scrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
    scrollElems.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            let id = el.getAttribute('href').substring(1);

            document.getElementById(id).scrollIntoView({ behavior: "smooth"});
        });
    });
});