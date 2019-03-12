const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const redRGB = document.getElementById('red-value')
const greenRGB = document.getElementById('green-value')
const blueRGB = document.getElementById('blue-value')
const slider = document.querySelector('[data-target="slider"]')
const hexDisplay = document.querySelector('.HEX-display')

function convertRGB(RGB) {
  let HEX = parseInt(RGB, 10).toString(16)
  if (HEX.length < 2) {
    HEX = "0" + HEX
  }
  return HEX
}

// listen to input
slider.addEventListener('input', event => {
  if (event.target.id === "red") {
    convertRGB(red.value)
    redRGB.textContent = red.value

  } else if (event.target.id === "green") {
    convertRGB(green.value)
    greenRGB.textContent = green.value

  } else if (event.target.id === "blue") {
    convertRGB(blue.value)
    blueRGB.textContent = blue.value
  }

  let backgroundcolor = convertRGB(red.value) + convertRGB(green.value) + convertRGB(blue.value)
  hexDisplay.innerHTML = `#${backgroundcolor}`
  document.body.style.backgroundColor = `#${backgroundcolor}`
})