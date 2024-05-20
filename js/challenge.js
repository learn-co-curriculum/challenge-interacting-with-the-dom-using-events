let globalCounter = 0
let globalTimer

const likesData = {}

const runTimer = () => {
  globalTimer = setInterval(() => {
    globalCounter += 1
    renderCounterOnScreen(globalCounter)
  },1000)
}

const renderCounterOnScreen = (globalCounter) => {
  document.querySelector('#counter').textContent = globalCounter
}

const decrementCounter = (_e) => {
  globalCounter -= 1
  renderCounterOnScreen(globalCounter)
}

const incrementCounter = (_e) => {
  globalCounter += 1
  renderCounterOnScreen(globalCounter)
}

const updateLikesRender = (globalCounter) => {
  const li = document.querySelector(`[counter="${globalCounter}"]`)
  li.textContent = `${globalCounter} has been liked ${likesData[globalCounter]} times`
}

const initLikesRender = (globalCounter) => {
  const likes = document.querySelector('.likes')
  const li = document.createElement('li')
  li.setAttribute(`counter`,`${globalCounter}`)
  li.textContent = `${globalCounter} has been liked ${likesData[globalCounter]} times`
  likes.appendChild(li)
}

const likeCounter = () => {
  if(likesData.hasOwnProperty(globalCounter)){
    likesData[globalCounter] += 1
    updateLikesRender(globalCounter)
  }else{
    likesData[globalCounter] = 1
    initLikesRender(globalCounter)
  }
}

const startStopCounter = (e) => {
  if(e.target.id === 'pause'){
    clearInterval(globalTimer)
    document.querySelector('#minus').disabled = true
    document.querySelector('#plus').disabled = true
    document.querySelector('#heart').disabled = true
    document.querySelector('#submit').disabled = true
    e.target.id = 'resume'
    e.target.textContent = 'resume'
  }else if(e.target.id === 'resume'){
    runTimer()
    document.querySelector('#minus').disabled = false
    document.querySelector('#plus').disabled = false
    document.querySelector('#heart').disabled = false
    document.querySelector('#submit').disabled = false
    e.target.id = 'pause'
    e.target.textContent = 'pause'
  }
}

const submitComment = (e) => {
  e.preventDefault()
  const comment = document.querySelector('#comment-input').value
  const list = document.querySelector('#list')
  const p = document.createElement('p')
  p.textContent = comment
  list.appendChild(p)
  document.querySelector('#comment-input').value = ''
}

document.querySelector('#comment-form').addEventListener('submit', submitComment)
document.querySelector('#pause').addEventListener('click', startStopCounter)
document.querySelector('#minus').addEventListener('click', decrementCounter)
document.querySelector('#plus').addEventListener('click', incrementCounter)
document.querySelector('#heart').addEventListener('click', likeCounter)
document.addEventListener("DOMContentLoaded", runTimer)
