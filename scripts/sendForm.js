document.addEventListener('DOMContentLoaded', () => {
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    let smallElem = document.createElement('small');

    document.body.addEventListener('click', formHandler);

    function sendData(url, data, callback, falseCallback) {
        let xhr = new XMLHttpRequest();

        smallElem.innerHTML = '';

        xhr.open('POST', url);
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200 || xhr.status === 201) {
                let result = JSON.parse(xhr.responseText);
                callback(result.id);
            } else {
                falseCallback(xhr.status);
                throw new Error(xhr.status);
            }
        });
        xhr.send(data);
    }

    function checkData(data) {
        smallElem.innerHTML = `Ваша заявка № ${data}! В ближайшее время с вами свяжутся!`;
        smallElem.style.color = 'lightgreen';
    }

    function checkError(err) {
        smallElem.innerHTML = `К сожалению на сервере технические неполадки. Попробуйте отправить данные позже. Ошибка: ${err}`;
        smallElem.style.color = '#f00';
    }

    function formHandler(e) {
        if (e.target.closest('.form')) {
            let form = e.target.closest('.form');
            form.addEventListener('submit', processingFormData);
        }
    }

    function processingFormData(e) {
        e.preventDefault();
        let form = e.target,
            data = {};

        for (const { name, value } of form.elements) {
            if (name) data[name] = value;
        }

        form.append(smallElem);

        if (!checkDataForm(data)) {
            sendData(URL, JSON.stringify(data), checkData, checkError);
            form.reset();
        }
        form.removeEventListener('submit', processingFormData);
        (function () {
            deleteSmallElem(form);
            onOffBtnForm(form);
        })();
    }

    function deleteSmallElem(form) {
        let smallElem = form.querySelector('small');

        setTimeout(() => {
            smallElem.remove();
        }, 5000);
    }

    function onOffBtnForm(form) {
        let btnForm = form.querySelector('button');

        btnForm.disabled = true;

        btnForm.style.color = '#000';
        btnForm.style.cursor = 'no-drop';
        btnForm.style.backgroundImage = 'linear-gradient(93.53deg, rgb(27, 49, 37) 11.43%, rgb(22, 34, 58) 80.79%)';

        setTimeout(() => {
            btnForm.disabled = false;

            btnForm.style.color = '#fff';
            btnForm.style.cursor = 'pointer';
            btnForm.style.backgroundImage = 'linear-gradient(93.53deg, rgb(237, 49, 37) 11.43%, rgb(232, 34, 58) 80.79%)';
        }, 5000);
    }

    function checkDataForm(form) {
        let flag = false;

        for (const value in form) {
            if (!form[value] || /^\s+$/.test(form[value])) {
                flag = true;
                smallElem.style.color = '#f00';
                smallElem.innerHTML = "Введите данные для отправки!";
                break;
            }
        }

        return flag;
    }
});