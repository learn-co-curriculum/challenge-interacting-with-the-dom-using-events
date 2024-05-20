// every second, I need the counter to go up by 1
// I need to start at 0, then add 1 and continue infinitely

// I can add or subtract from the counter using the + or - button

// I can pause the counter which will disable all buttons except the pause button
// the pause button should switch to a label that says resume and then resume 

const counterID = document.getElementById('counter')
let storeCount = 0
counterID.textContent = storeCount

const letsCount = setInterval(function() {
  storeCount++
  counterID.textContent = storeCount
  if (storeCount === 20) {
    clearInterval(letsCount)
  }
}, 1000)
