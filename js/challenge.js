// // every second, I need the counter to go up by 1 ✔️
// // I need to start at 0, then add 1 and continue infinitely ✔️

// // I can add or subtract from the counter using the + or - button ✔️
// // this is done while the counter is working ✔️

// // I can pause the counter ✔️
// // When I pause, I will disable all buttons except the pause button
// // the pause button should switch to a label that says resume and then restart to resume ✔️

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
      startCount(1000)
      pauseButton.innerText = 'pause'
    }
  })

  const minusButton = document.getElementById('minus')
  minusButton.addEventListener('click', (e) => {
    storeCount--
  })

  const plusButton = document.getElementById('plus')
  plusButton.addEventListener('click', (e) => {
    storeCount++
  })

  const heartButton = document.getElementById('heart')
  heartButton.addEventListener('click', (e) => {
    const likeSection = document.getElementsByClassName('likes')
    const li = document.createElement('li')
    li.textContent = `${storeCount} has been liked x time(s)`
    document.body.appendChild(li)
  })

})

