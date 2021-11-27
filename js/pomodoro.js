window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

let secondCount = 1500;
let pomodoro;
const displayPara = document.querySelector('.clock');

function displayCount() {
    let minutes = Math.floor((secondCount % 3600)/60);
    let seconds = Math.floor(secondCount %  60)


    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

    displayPara.textContent = displayMinutes + ':' + displaySeconds;

    secondCount--;
}

displayCount();


// button functions

const startBtn = document.querySelector('.start');
const muteBtn = document.querySelector('.mute');
const resetBtn = document.querySelector('.reset');
let volume = muteBtn;


startBtn.addEventListener('click', () => {
    pomodoro = setInterval(displayCount, 1000);
    audioStart.play();
    startBtn.disabled = true;
});

resetBtn.addEventListener('click', () => {
    clearInterval(pomodoro);
    startBtn.disabled = false;
    secondCount = 1500;
    displayCount();
    audioStart.pause();
    audioReset.play();
});

muteBtn.addEventListener('click', () => {
    if (!audioStart.muted) {
        vol = volume.value;
        // tror det är fel knapp innertxt
        audioStart.muted = !audioStart.muted;
    }

    if (audioStart.muted) {
        volume.value = 0;
        muteId.innertext = 'Unmute';
    }
        else {
        volume.value = vol;
        muteId.innerText = 'Mute';
    }
});


