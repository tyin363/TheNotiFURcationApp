var counter = 0;
var timeleft = 1800;

function jsFunction(value) {
  counter = 0;
  timeleft = value * 60;
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
  const gap = timeleft - counter;
  //const gap = countDate - now;

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
