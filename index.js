const newYears =  `1 Jan 2023`;

const daysEl = document.getElementById(`day`);
const hourEl = document.getElementById(`hour`);
const minuteEl = document.getElementById(`minute`);
const secondEl = document.getElementById(`second`);

function countDown()
{
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
 const seconds = Math.floor(totalSeconds) % 60;
    console.log(days, minutes, hours, seconds);
    
    daysEl.innerHTML = days;
    hourEl.innerHTML = hours;
    minuteEl.innerHTML = minutes;
    secondEl.innerHTML = seconds;
}

countDown();


setInterval(countDown, 1000);