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

const startBtn = document.querySelector('.start');
const muteBtn = document.querySelector('.mute');
const resetBtn = document.querySelector('.reset');


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
    audio.currentTime = 0;
    audioReset.play();
});

muteBtn.addEventListener('click', () => {
    if (muteAudio.muted) {
        volume.value = 0;
        muteAudio.innerText = 'Unmute';
    } else {
        volume.value = vol;
        muteAudio.innerText = 'Mute';
    }
});



displayCount();


    function resetAudio(){
        audioReset.play();
        if (audioStart.play) {
            audioStart.paused();
            // I don't know how to call/paus ticking sound
        }
    }

    function playAudio(){
        if (audioStart.paused) {
            audioStart.play();
        } else{
            audioStart.paused();
        }
    }

    function muteAudio(){

        }
  

    // ended
    //audioFile.onended = function() {
    //    alert('Audio has ended');
    //}