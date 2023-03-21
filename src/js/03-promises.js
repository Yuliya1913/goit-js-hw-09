import Notiflix from 'notiflix';
console.log(Notiflix);

const btnEl = document.querySelector('.form');
console.log(btnEl);

// при отправке формы будет создаваться цикл и какое пользователь введет
// число в Amount столько раз будет вызываться функция по созданию промиса

btnEl.addEventListener('submit', handleSubmit);

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.currentTarget);
    const { delay, step, amount } = e.currentTarget;

    let inputDelay = Number(delay.value);
    let inputStep = Number(step.value);
    const inputAmount = Number(amount.value);

    console.log(inputDelay);
    console.log(inputStep);
    console.log(inputAmount);
    
    for (let i = 0; i < inputAmount; i += 1) {
          
      // вызываем функции по созданию промиса и передаем в качестве аргументов 
      // номер промиса и задержку с учетом Step на каждой итерации

      createPromise(i+1, inputDelay)
        .then(({ position, delay }) => {
          // console.log(res);
          // использовала библиотеку для вывода окна положительного ответа 
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        
        .catch(({ position, delay }) => {
          // console.log(res);
           // использовала библиотеку для вывода окна отрицательного ответа
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        })
      
      // при следующей итерации добавляем Step
      inputDelay = inputDelay + inputStep;
    }
  
}

// функция по созданию промиса
function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;
  // создали промис
  const promise = new Promise((resolve, reject) => {

    // промисы будут создаваться с учетом задержки delay
    setTimeout(() => {
      if (shouldResolve) {
        resolve(({ position, delay }));
      } else {
        reject(({ position, delay }));
      }
    }, delay);
    
  })
  return promise;
  }











  











// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }









// 2 вариант когда промис возвращается не в качестве объекта значений свойств

// import Notiflix from 'notiflix';
// console.log(Notiflix);

// const btnEl = document.querySelector('.form');
// console.log(btnEl);

// // при отправке формы будет создаваться цикл и какое пользователь введет
// // число в Amount столько раз будет вызываться функция по созданию промиса

// btnEl.addEventListener('submit', handleSubmit);

//   function handleSubmit(e) {
//     e.preventDefault()
//     console.log(e.currentTarget);
//     const { delay, step, amount } = e.currentTarget;

//     let inputDelay = Number(delay.value);
//     const inputStep = Number(step.value);
//     const inputAmount = Number(amount.value);

//     console.log(inputDelay);
//     console.log(inputStep);
//     console.log(inputAmount);
    
//     for (let i = 0; i < inputAmount; i += 1) {
      
//       // вызов функции по созданию промиса и передаем в качестве аргументов 
//       // номер промиса и задержку с учетом Step на каждой итерации

//       createPromise(i+1, inputDelay + inputStep * i)
//         .then(res => {
//           // console.log(res);
//           // использовала библиотеку для вывода окна положительного ответа 
//           Notiflix.Notify.success(res);
//         })
        
//         .catch(res => {
//           // console.log(res);
//            // использовала библиотеку для вывода окна отрицательного ответа
//           Notiflix.Notify.failure(res);
//         })
      
//     }
  
// }

// // функция по созданию промиса
// function createPromise(position, delay) {

//   const shouldResolve = Math.random() > 0.3;
//   // создали промис
//   const promise = new Promise((resolve, reject) => {

//     // промисы будут создаваться с учетом задержки delay
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         reject(`❌ Rejected promise ${position} in ${delay}ms`);
//       }
//     }, delay);
    
//   })
//   return promise;
//   }