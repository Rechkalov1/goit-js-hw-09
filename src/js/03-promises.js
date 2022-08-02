import { Notify } from 'notiflix/build/notiflix-notify-aio';
 const form =document.querySelector('.form');
 const nameDelay=document.querySelector('[name="delay"]');
 const nameStep=document.querySelector('[name="step"]');
 const nameAmount=document.querySelector('[name="amount"]')

 form.addEventListener('submit',formSubmit)
 console.log(form)
 function formSubmit(e){
  e.preventDefault();

const delay=(nameDelay.value);
const step=(nameStep.value);
const amount=(nameAmount.value);
 
for (let i=1;i<=amount;i+=1){
  createPromise(i, delay)
  .then(({ position, delay }) => Notify.success(`Fulfilled promise ${position} in ${delay}ms`))
  .catch(({ position, delay }) => Notify.failure(`Rejected promise ${position} in ${delay}ms`))
  delay +=step}
 };

function createPromise(position, delay) {
 return new Promise((resolve,reject)=>{
 setInterval(()=>{
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay} );
  } else {
    reject({position,delay});
  }
 },delay);
}
 )}


