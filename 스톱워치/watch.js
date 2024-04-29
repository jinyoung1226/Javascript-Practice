function operate() {
  if (!checkOperating) {
    timeId = setInterval(operateTime, 1000);
    checkOperating = true;
  }
}

function operateTime() {
  seconds++;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (seconds > 59) {
    minutes++;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    minutesElement.textContent = minutes;
    seconds = "00";
  }
  secondsElement.textContent = seconds;

  if (minutes > 59) {
    hours++;
    if (hours < 10) {
      hours = "0" + hours;
    }
    hoursElement.textContent = hours;
    minutes = "00";
    minutesElement.textContent = minutes;
  }
}

function stopTime() {
  if (checkOperating) {
    clearInterval(timeId);
    checkOperating = false;
  }
}

function resetTime() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  secondsElement.textContent = "0" + seconds;
  minutesElement.textContent = "0" + minutes;
  hoursElement.textContent = "0" + hours;
}

function saveTime() {
  let recentTime = hours + ":" + minutes + ":" + seconds;

  let newParagraphElement = document.createElement("p");
  newParagraphElement.textContent = recentTime;
  savePointElement.append(newParagraphElement);
}
