window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

let secondCount = 5;
let pomodoro;
const displayPara = document.querySelector('.clock');

function displayCount() {
    let minutes = Math.floor((secondCount % 3600)/60);
    let seconds = Math.floor(secondCount %  60)


    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

    displayPara.textContent = displayMinutes + ':' + displaySeconds;

    //Ended, play alarm
    if (secondCount !== 0) {
        secondCount--;
    } else {
        audioAlarm.loop = false;
        audioAlarm.play();
        audioStart.pause();
        audioStart.currentTime = 0;
    }
}

displayCount();


// button functions

const startBtn = document.querySelector('.start');
const muteBtn = document.querySelector('.mute');
const resetBtn = document.querySelector('.reset');
let volume = muteBtn;

startBtn.addEventListener('click', () => {
    pomodoro = setInterval(displayCount, 1000);
    audioReset.pause();
    audioReset.currentTime = 0;
    audioStart.play();
    startBtn.disabled = true;
});

resetBtn.addEventListener('click', () => {
    clearInterval(pomodoro);
    startBtn.disabled = false;
    secondCount = 5;
    displayCount();
    audioStart.pause();
    audioAlarm.pause();
    audioStart.currentTime = 0;
    audioReset.play();
});

muteBtn.addEventListener('click', () => {

    if (!audioStart.muted) {
        vol = volume.value;
    }

    audioStart.muted = !audioStart.muted;

    if (audioStart.muted) {
        volume.value = 0;
        muteBtn.innerText = 'Unmute';
    }
        else {
        volume.value = vol;
        muteBtn.innerText = 'Mute ticking';
    }
});


