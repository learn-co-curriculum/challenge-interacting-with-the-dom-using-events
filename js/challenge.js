// // every second, I need the counter to go up by 1 ✔️
// // I need to start at 0, then add 1 and continue infinitely ✔️

// // I can add or subtract from the counter using the + or - button ✔️
// // this is done while the counter is working ✔️

// // I can pause the counter ✔️
// // When I pause, I will disable all buttons except the pause button
// // the pause button should switch to a label that says resume and then restart to resume ✔️

document.addEventListener("DOMContentLoaded", (e) => {
  const counterID = document.getElementById('counter')
  const pauseButton = document.getElementById('pause')
  const minusButton = document.getElementById('minus')
  const plusButton = document.getElementById('plus')
  const heartButton = document.getElementById('heart')
  const likeSection = document.querySelector('.likes')
  let intervalID = startCount(1000);

  let storeCount = 0

  function startCount(interval) {
    return setInterval(function() {
      storeCount++
      counterID.textContent = storeCount
    }, interval)
  }
  
  pauseButton.addEventListener('click', (e) => {
  
    if (pauseButton.innerText === 'pause') {
      pauseButton.innerText = 'resume'
      clearInterval(intervalID)
      minusButton.disabled = true
      plusButton.disabled = true
      heartButton.disabled = true
    } else {
      intervalID = startCount(1000)
      pauseButton.innerText = 'pause'
      minusButton.disabled = false
      plusButton.disabled = false
      heartButton.disabled = false
    }
  })

  minusButton.addEventListener('click', (e) => {
    storeCount--
  })

  plusButton.addEventListener('click', (e) => {
    storeCount++
  })

  heartButton.addEventListener('click', (e) => {
    const li = document.createElement('li')
    li.textContent = `${storeCount} has been liked x time(s)`
    likeSection.appendChild(li)
  })

})

