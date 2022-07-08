var counter = 0;
var timeleft = 1800;

const countdown = () => {
    
    const countDate = new Date("July 17, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    counter++;
    const gap = timeleft - counter;
    //const gap = countDate - now;

    const  second = 1;
    const  minute = second * 60;
    const  hour = minute * 60;
    const  day = hour * 24;
    

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/ hour);
    const textMinute = Math.floor((gap % hour)/ minute);
    const textSecond = Math.floor((gap % minute)/ second);
    console.log(textSecond);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

};

setInterval(countdown, 1000);