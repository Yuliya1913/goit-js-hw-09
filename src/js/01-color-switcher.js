// ссылка на body
const bodyEl =  document.querySelector('body');
console.log(bodyEl);
// ссылка на кнопку старт
const btnStartEl = document.querySelector('[data-start]');
console.log(btnStartEl);
// ссылка на кнопку стоп
const btnStopEl = document.querySelector('[data-stop]');
console.log(btnStopEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// при клике на кнопку изменится body на рандомный цвет с интервалом в 1секунду
// кнопка старт станет неактивной, добавляя атрибут disabled
const changeColor = () => {
    
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
        btnStartEl.setAttribute('disabled', true);
        
    }, 1000);
} 

// при клике на кнопку стоп остановится изменение цвета
// и кнопка старт станет снова активной, удаляя атрибут disabled
const stopColor = () => {
    clearInterval(timerId);
    btnStartEl.removeAttribute('disabled');
}

btnStartEl.addEventListener('click', changeColor);
btnStopEl.addEventListener('click', stopColor);

