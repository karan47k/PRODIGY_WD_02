let ms = 0,
    s = 0,
    m = 0,
    h = 0;
let timer = null;
let lapCount = 0;  
let isRunning = false;  
const display = document.querySelector('#timer_stopwatch');
const laps = document.querySelector('#laps');
function start() 
{
    if (!timer) 
    {
        timer = setInterval(run, 10);
        isRunning = true;
    }
}
function run() 
{
    ms++;
    if (ms === 100) 
    {
        ms = 0;
        s++;
    }
    if (s === 60) 
    {
        s = 0;
        m++;
    }
    if (m === 60) 
    {
        m = 0;
        h++;
    }
    display.innerHTML = getTimer();
}
function getTimer() 
{
    return (
        (h < 10 ? "0" + h : h) + ":" +
        (m < 10 ? "0" + m : m) + ":" +
        (s < 10 ? "0" + s : s) + ":" +
        (ms < 10 ? "0" + ms : ms < 100 ? ms : ms)
    );
}
function pause() 
{
    clearInterval(timer);
    timer = null;
    isRunning = false; 
}

function reset() 
{
    clearInterval(timer);
    timer = null;
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    display.innerHTML = getTimer();
}
function restart() 
{
    reset();
    start();
}
function lap() 
{
    if (isRunning) 
    {  
        lapCount++;  
        const li = document.createElement("li");
        li.innerText = `Lap ${lapCount}: ${getTimer()}`;
        laps.appendChild(li);
    }
}
function resetLap() 
{
    laps.innerHTML = "";  
    lapCount = 0;  
    reset();  
}

