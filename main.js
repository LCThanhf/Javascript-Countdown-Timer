var timeDisplay = document.getElementById('time-display');
var minutesInput = document.getElementById('minutes');
var secondsInput = document.getElementById('seconds');
var startButton = document.getElementById('start');
var resetButton = document.getElementById('reset');
var alarm = document.getElementById('alarm');
var message = document.getElementById('message');
var countdown;

startButton.addEventListener('click', function() {
    var minutes = Math.max(0, minutesInput.value);
    var seconds = Math.max(0, secondsInput.value);
    var totalTime = minutes * 60 + seconds;

    if (!minutes && !seconds) {
        message.textContent = 'Enter time';
        return;
    } else {
        message.textContent = '';
    }

    timeDisplay.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    countdown = setInterval(function() {
        totalTime--;

        var remainingMinutes = Math.max(0, Math.floor(totalTime / 60));
        var remainingSeconds = Math.max(0, totalTime % 60);

        minutesInput.value = remainingMinutes;
        secondsInput.value = remainingSeconds;

        timeDisplay.textContent = (remainingMinutes < 10 ? '0' : '') + remainingMinutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;

        if (totalTime <= 0) {
            clearInterval(countdown);
            message.textContent = 'Time is up';
            alarm.play();
        }
    }, 1000);
});

resetButton.addEventListener('click', function() {
    clearInterval(countdown);
    alarm.pause();
    alarm.currentTime = 0;
    message.textContent = '';
    timeDisplay.textContent = '00:00';
    minutesInput.value = 0;
    secondsInput.value = 0;
});        
