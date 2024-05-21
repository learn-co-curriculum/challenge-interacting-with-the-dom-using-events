document.addEventListener("DOMContentLoaded", (e) => {
  
  const counterID = document.getElementById('counter')
  const pauseButton = document.getElementById('pause')
  const minusButton = document.getElementById('minus')
  const plusButton = document.getElementById('plus')
  const heartButton = document.getElementById('heart')
  const likeSection = document.querySelector('.likes')
  const submitButton = document.getElementById('submit')
  const formInput = document.getElementById('comment-input')
  const commentSection = document.getElementById('list')
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
      submitButton.disabled = true
    } else {
      intervalID = startCount(1000)
      pauseButton.innerText = 'pause'
      minusButton.disabled = false
      plusButton.disabled = false
      heartButton.disabled = false
      submitButton.disabled = false
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

  submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    li.textContent = formInput.value
    commentSection.appendChild(li)
  })
})