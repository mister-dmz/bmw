document.addEventListener('DOMContentLoaded', () => {
    let modalElem = document.querySelector('.modal');
    let designTextElem = document.querySelector('.design-text');

    function openModal(e) {
        if (e.target.classList.contains('more')) {
            modalElem.classList.remove('hidden');
        }
    }

    function closeModal(e) {
        if (e.target.classList.contains('overlay') || e.target.classList.contains('modal__close')) {
            modalElem.classList.add('hidden');
        }
    }

    designTextElem.addEventListener('click', openModal);
    modalElem.addEventListener('click', closeModal);
});