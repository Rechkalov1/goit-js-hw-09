// Ипортирую библиотеке
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

form=document.querySelector('#datetime-picker');
timeElAll=document.querySelectorAll('.value');
buttonStart=document.querySelector("[data-start]")
// Стучусь к форме и датах

buttonStart.addEventListener('click', onButton);
buttonStart.disabled = true;
// параметр flatpickr`a

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose, 
   
  
};

flatpickr(form, options);
// отсчет времени
let timer =0;
let intervalId =null;

function onClose(selectedDates){
  const newDate= options.defaultDate;

  if(selectedDates[0]<newDate){
    Notify.failure(`Please choose Date`,{
      timeout: 2000,});
  }else if (selectedDates[0]>newDate){
    buttonStart.disabled=false;
   timer=selectedDates[0];
  }
}
function timerInterval(date){
  intervalId=setInterval(()=>{
    const currentTime=Date.now();
    const countDownTime= date -currentTime;
    const time =convertMs(countDownTime);
    updateTime(time);
    if(countDownTime<1000){
    form.disabled=false;
      clearInterval(intervalId);

    }
  },1000)
}
function onButton(){
  buttonStart.disabled=true;
  form.disabled=true;
  timerInterval(timer)
};
function addLeadingZero(value) {
  return String(value).padStart(2, '0');};

  function convertMs(ms) {
    const days = addLeadingZero(Math.floor((ms / (1000 * 60 * 60 * 24)) % 7));
    const hours = addLeadingZero(Math.floor((ms / (1000 * 60 * 60)) % 24));
    const minutes = addLeadingZero(Math.floor((ms / (1000 * 60)) % 60));
    const seconds = addLeadingZero(Math.floor((ms / 1000) % 60));

    return { days, hours, minutes, seconds};
};
  function updateTime({ days, hours, minutes, seconds })
  { timeElAll[0].textContent=days;
    timeElAll[1].textContent=hours;
    timeElAll[2].textContent=minutes;
    timeElAll[3].textContent=seconds;
    }
  
    
  






  // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}