

setInterval (setClock, 1000)
const hourHand= document.querySelector("[data-hour-hand]")
const minuteHand= document.querySelector("[data-minute-hand]")
const secondHand= document.querySelector("[data-second-hand]")



function setClock () {
  const dateNow= new Date()  /* get current time*/

  const secondsRatio= dateNow.getSeconds()/60
  const minutesRatio= (secondsRatio+dateNow.getMinutes())/60
  const hoursRatio= (minutesRatio+dateNow.getHours())/12
    setRotation (secondHand,secondsRatio)
    setRotation (minuteHand,minutesRatio)
    setRotation (hourHand,hoursRatio)
}

function setRotation(element, rotationRatio){
  element.style.setProperty("--rotation",rotationRatio*360)
}

setClock
