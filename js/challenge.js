// every second, I need the counter to go up by 1 ✔️
// I need to start at 0, then add 1 and continue infinitely ✔️

// I can add or subtract from the counter using the + or - button
// this is done while the counter is working

// I can pause the counter ✔️
// When I pause, I will disable all buttons except the pause button
// the pause button should switch to a label that says resume and then restart to resume ✔️

document.addEventListener("DOMContentLoaded", (e) => {
  const counterID = document.getElementById('counter')
  let storeCount = 0
  
  function startCount(interval) {
    return setInterval(function() {
      storeCount++
      counterID.textContent = storeCount
    }, interval)
  }
  letsCount = startCount(1000);
 
  
  const pauseButton = document.getElementById('pause')

  pauseButton.addEventListener('click', (e) => {
    if (pauseButton.innerText === 'pause') {
      pauseButton.innerText = 'resume'
      clearInterval(letsCount)  
    } else {
      counterID.textContent = 0
      storeCount = 0
      startCount(1000)
      pauseButton.innerText = 'pause'
      // clearInterval(letsCount)  
    }
  })
})

