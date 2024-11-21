// task - 1
const textEl = document.querySelector('.text');
const buttonEl = document.querySelector('.btn');

buttonEl.addEventListener('click', () => {
    textEl.textContent = ``;
    buttonEl.textContent = 'Показать текст';

    buttonEl.addEventListener('click', () => {
        textEl.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, rem?`;
        buttonEl.textContent = 'Скрыть текст';
    });
});


