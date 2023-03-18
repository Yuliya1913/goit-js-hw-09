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

// кнопка изначально disabled
btnEl.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        
        // если введенное значение меньше текущего ввести сообщение
        // если все ок,то разблокировать кнопку для клика и отправки для таймера
        if (selectedDates[0] < new Date()) {
            
            window.alert('Please choose a date in the future');
            
        } else {
            btnEl.removeAttribute('disabled');
           
            btnEl.addEventListener('click', onStartBtnClick);
        }
               
    }
   
};

// инициализация библиотеки на элементе input[type="text"]
const inputDate = flatpickr('input[type="text"]', options);

    function onStartBtnClick(event) {
        
        const timeId = setInterval(() => {

          // введенное пользователем значение даты
            changeTime = inputDate.selectedDates[0];
            console.log(changeTime);

            // дата на текущий момент
            const presentTime = new Date();
            console.log(presentTime);

            // значение для старта тaймера
            const deltaTime = changeTime - presentTime;
            console.log(deltaTime);

            // Конвертируем дату 00:00:00:00
            const transformTime = convertMs(deltaTime);
            console.log(transformTime);

            // вызываем функцию по записи времени в поля таймера
            сountdownTime(transformTime);

            btnEl.setAttribute('disabled', true);

            // когда таймер закончился очищаем интервал
           if (deltaTime < 1000) {
           clearInterval(timeId);
           return;
    }

        }, 1000);
    }

function сountdownTime({ days, hours, minutes, seconds }) {
                   
    dataDays.innerText = days;
    dataHours.innerText = hours;
    dataMinutes.innerText = minutes;
    dataSeconds.innerText = seconds;
            
}

// функция для конвертации времени

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
    
// функция для добавления в интерфейсе таймера 0, если в числе меньше двух символов
function addLeadingZero(value) {
return String(value).padStart(2, '0');
}
