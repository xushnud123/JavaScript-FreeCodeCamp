const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 13, 11, 30, 0);


const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year}
${hours}:${minutes}am`;

//future time in ms
const futureTime = futureDate.getTime();


function getRemainingTime(){
  const today = new Date().getTime();
  //belgilab qo'yilgan vaqtdan hozirgi vaqtni ayiramiz shunda qancha vaqt
  //qolgani kelib chiqadi getTime() 1970 yildan belgilangan 
  //vaqtgacha millisekundlarni o'lchaydi
  const t = futureTime - today;
  //1s = 1000ms
  //1m = 60s
  //1hr = 60min
  //1d = 24hr

  //values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  //calculate all values
  //oldiniga qancha kun borligini topamiz
  let days = t / oneDay;
  days = Math.floor(days);
  //butun vaqtni % kun qilsak qolgan vaqtni olamiz 
  //bundan soatni aniqlab olamiz 
  let hours = Math.floor((t % oneDay) / oneHour);
  //soatga bo'lib minut aniqlanadi
  let minutes = Math.floor((t % oneHour) / oneMinute);
  //minutga bo'lib secund aniqlanadi
  let seconds = Math.floor((t % oneMinute) / 1000);

  //vaqtlarni bitta arrayga yig'amiz
  const values = [days,hours,minutes,seconds];

  //0 qo'shish
  function format(item){
    if(item < 10){
      return `0${item}`;
    }
    else{
      return item;
    }
  }

  //htmlga vaqtlani beramiz
  //forEach qiymatlar bo'yicha aylanadi
  items.forEach(function (item, index){
    item.innerHTML = format(values[index]);
  });
  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">
    sorry, this giveaway has expired
    </h4>`;
  }
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();