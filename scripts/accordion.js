document.addEventListener('DOMContentLoaded', () => {
    let featureLinkElems = document.querySelectorAll('.feature__link'),
        featureSubElems = document.querySelectorAll('.feature-sub');

    featureLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('feature__link_active')) {
                featureSubElems[index].classList.add('hidden');
                btn.classList.remove('feature__link_active');
            } else {
                featureLinkElems.forEach((featureLinkElem) => {
                    featureLinkElem.classList.remove('feature__link_active');
                });
                featureSubElems.forEach((featureSubElem) => {
                    featureSubElem.classList.add('hidden');
                });
                featureSubElems[index].classList.remove('hidden');
                btn.classList.add('feature__link_active');
            }
        });
    });
});