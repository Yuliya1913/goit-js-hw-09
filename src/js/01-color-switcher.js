// ссылка на body
const bodyEl =  document.querySelector('body');
console.log(bodyEl);
// ссылка на кнопку старт
const btnStartEl = document.querySelector('[data-start]');
console.log(btnStartEl);
// ссылка на кнопку стоп
const btnStopEl = document.querySelector('[data-stop]');
console.log(btnStopEl);
let timerId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// при клике на кнопку сделаем сразу кнопку старт неактивной, добавляя атрибут disabled
// после изменится body на рандомный цвет с интервалом в 1секунду

const changeColor = () => {
    
    btnStartEl.setAttribute('disabled', true);
    
     timerId = setInterval(() => {
        bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
           
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

