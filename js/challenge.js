document.addEventListener('DOMContentLoaded', function() {
  
const counter = document.getElementById('counter')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const pauseButton = document.getElementById('pause')
const likeButton = document.getElementById('heart')
const likeSection = document.querySelector('.likes')
const commentSection = document.getElementById('list')
const commentForm = document.getElementById('comment-form')
const submitBox = document.getElementById('comment-input')
let likeCount

const incrementCounter = () => {
  if (!counter.classList.contains('paused'))
  setTimeout(() => {
    counter.textContent = Number(counter.textContent) + 1
    incrementCounter()
  }, 1000)
}

incrementCounter()

plusButton.addEventListener('click', () => {
  if (!counter.classList.contains('paused'))
  counter.textContent = Number(counter.textContent) + 1
})

minusButton.addEventListener('click', () => {
  if (!counter.classList.contains('paused'))
  counter.textContent = Number(counter.textContent) - 1
})

likeButton.addEventListener('click', () => {
  const createListItem = document.createElement('li')
  if (!counter.classList.contains('paused'))
  if (document.getElementById(`${counter.textContent}`)){
    likeCount = Number(likeCount) + 1
    document.getElementById(`${counter.textContent}`).textContent = `The number ${counter.textContent} has been liked ${likeCount} times`
  }else{
    likeCount = 1
    likeSection.appendChild(createListItem).id = `${counter.textContent}`
    document.getElementById(`${counter.textContent}`).textContent = `The number ${counter.textContent} has been liked ${likeCount} time`
  }
})

commentForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const createListItem = document.createElement('p')
  createListItem.textContent = submitBox.value
  commentSection.appendChild(createListItem)
})

pauseButton.addEventListener('click', () => {
  if (counter.classList.contains('paused')){
    pauseButton.textContent = 'pause'
    counter.classList.remove('paused')
    incrementCounter()
  } else {
    pauseButton.textContent = 'resume'
    counter.classList.add('paused')
  }
})



});


