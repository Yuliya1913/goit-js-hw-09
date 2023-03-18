import flatpickr from "flatpickr";
console.log(flatpickr);
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('input[type="text"]');
// console.log(inputEl);

const btnEl = document.querySelector('[data-start]');
// console.log(btnEl);
const divEl = document.querySelector('.timer');
// console.log(divEl);
const dataDays = document.querySelector('[data-days]')
// console.log(dataDays);

const dataHours = document.querySelector('[data-hours]')
// console.log(dataHours);

const dataMinutes = document.querySelector('[data-minutes]')
// console.log(dataMinutes);

const dataSeconds = document.querySelector('[data-seconds]')
// console.log(dataSeconds);

let changeTime;
let presentTime;
let deltaTime;
let transformTime;

// кнопка изначально disabled
btnEl.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
       
        // введенное пользователем значение даты
        changeTime = selectedDates[0];
        console.log(changeTime);

        // дата на текущий момент
        presentTime = new Date();
        console.log(presentTime);

        // значение для старта тфймера
        deltaTime = changeTime - presentTime;
        console.log(deltaTime);

        transformTime = convertMs(deltaTime);
        console.log(transformTime);

        // если введенное значение меньше текущего ввести сообщение
        // если все ок,то разблокировать кнопку для клика и отправки для таймера
        if (selectedDates[0] < new Date()) {
            
            window.alert('Please choose a date in the future');
            
        } else {
            btnEl.removeAttribute('disabled');
            // const transformTime = convertMs(deltaTime);
            btnEl.addEventListener('click', сountdownTime(transformTime));
        }
               
    }
   
};

// инициализация библиотеки на элементе input[type="text"]
const inputDate = flatpickr('input[type="text"]', options);

function сountdownTime({ days, hours, minutes, seconds }) {
        
    const timeId = setInterval(() => {
        dataDays.innerText = `${days}`;
        dataHours.innerText = `${hours}`;
        dataMinutes.innerText = `${minutes}`;
        dataSeconds.innerText = `${seconds}`;
    }, 1000);

    if (deltaTime < 0) {
        clearInterval(timeId);
        return;
    }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
    

function addLeadingZero(value) {
return String(value).padStart(2, '0');
}
