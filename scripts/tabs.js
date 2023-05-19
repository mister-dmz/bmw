document.addEventListener('DOMContentLoaded', () => {
    let tabsFieldElems = document.querySelectorAll('[data-tabs-field]'),
        tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]'),
        designTitleElems = document.querySelectorAll('.design__title');

    for (const tab of tabsHandlerElems) {
        tab.addEventListener('click', (e) => {
            tabsHandlerElems.forEach((item, tabHandlerIndex) => {
                if (e.target === item) {
                    item.classList.add('design-list__item_active');
                    designTitleElems[tabHandlerIndex].classList.remove('hidden');
                } else {
                    item.classList.remove('design-list__item_active');
                    designTitleElems[tabHandlerIndex].classList.add('hidden');
                }
            });

            tabsFieldElems.forEach(item => {
                e.target.dataset['tabsHandler'] === item.dataset['tabsField']
                    ? item.classList.remove('hidden')
                    : item.classList.add('hidden');
            });
        });
    }
});