let hours = 0;
let minutes = 0;
let seconds = 0;
let timeId;
let checkOperating = false

const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const btnStartElement = document.getElementById("btn-start");
const btnStopElement = document.getElementById("btn-stop");
const btnResetElement = document.getElementById("btn-reset");
const btnSaveElement = document.getElementById("btn-save");
const savePointElement = document.getElementById("save-point");

btnStartElement.addEventListener("click", operate);

btnStopElement.addEventListener("click", stopTime);

btnResetElement.addEventListener("click", resetTime);

btnSaveElement.addEventListener("click", saveTime);
