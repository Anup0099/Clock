setInterval(setClock, 1000);
const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-min-hand]');
const hourHand = document.querySelector('[data-hour-hand]');
function setClock() {
  const date = new Date();
  const getSeconds = date.getSeconds() / 60;
  const getMinutes = (getSeconds + date.getMinutes()) / 60;
  const getHours = (getMinutes + date.getHours()) / 12;
setRotations(secondHand, getSeconds);
setRotations(minuteHand, getMinutes);
setRotations(hourHand, getHours);

}

function setRotations(element,rotationRatio) {
        element.style.setProperty('--rotation', rotationRatio*360);
}

setClock();