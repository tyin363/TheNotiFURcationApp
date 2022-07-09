var counter = 0;
var timeleft = 6;

/*
const btn = document.querySelector('#x-button');
const sb = document.querySelector('#time-intervals');
btn.onclick = (event) => {
    event.preventDefault();
    console.log(sb.selectedIndex);
    const x = sb.selectedIndex;
    if(x==2) {
        timeleft = 3600;
    }
    if(x==1) {
        timeleft = 1800
    }
    if(x==0) {
        timeleft = 6
    }
    counter = 0
}
*/

function jsFunction() {
  var e = document.getElementById("time-intervals");
  timeleft = e.value * 60;
  counter = 0;
}

function leftPad(number, targetLength) {
  var output = number + "";
  while (output.length < targetLength) {
    output = "0" + output;
  }

  return output;
}

const countdown = () => {
  const countDate = new Date("July 17, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  counter++;
  var gap = timeleft - counter;
  //const gap = countDate - now;

  if(gap <= 0) {
      gap = timeleft;
      counter=0;
      console.log(gap);
  }

  const second = 1;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".top-day").innerText = leftPad(textDay, 2);
  document.querySelector(".top-hour").innerText = leftPad(textHour, 2);
  document.querySelector(".top-minute").innerText = leftPad(textMinute, 2);
  document.querySelector(".top-second").innerText = leftPad(textSecond, 2);

  document.querySelector(".bottom-day").innerText = leftPad(textDay, 2);
  document.querySelector(".bottom-hour").innerText = leftPad(textHour, 2);
  document.querySelector(".bottom-minute").innerText = leftPad(textMinute, 2);
  document.querySelector(".bottom-second").innerText = leftPad(textSecond, 2);
};

setInterval(countdown, 1000);
