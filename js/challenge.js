document.addEventListener('DOMContentLoaded', function(){
let counter = document.getElementById('counter')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let timer
let form = document.getElementById('comment-form')
let heart = document.getElementById('heart')

function startTimer() {
  timer = setInterval(() => {
    counter.innerText++;
  }, 1000)
}

function handleIncrement() {
  plus.addEventListener('click', (e) => {
    counter.innerText++
  })
  
  minus.addEventListener('click', (e) => {
    counter.innerText--
  })
}

function handleLikes() {
  let likeCounter = null
  let currentLikes = 0

  heart.addEventListener('click', (e) => {
    let li = document.createElement('li')
    let likesSection = document.querySelector('.likes')
    let counterValue = counter.innerText;

    if (counterValue === currentLikes) {
      likeCounter += 1;
    } else {
      likeCounter = 1;
      currentLikes = counterValue;
    }

    li.innerText = `${counter.innerText} has been liked ${likeCounter} times`
    likesSection.appendChild(li)
    })
}

function handlePause() {
  let pause = document.getElementById('pause')
  let submit = document.getElementById('submit')

  pause.addEventListener('click', (e) => {
    if (pause.innerText === 'pause') {
      clearInterval(timer)
      pause.innerText = 'resume'
      heart.disabled = true
      minus.disabled = true
      plus.disabled = true
      submit.disabled = true
    } else if (pause.innerText === 'resume') {
      startTimer()
      pause.innerText = 'pause'
      heart.disabled = false
      minus.disabled = false
      plus.disabled = false
      submit.disabled = false
    }
  })
}

function handleComments() {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let comment = e.target.comment.value
    let list = document.getElementById('list')
    let p = document.createElement('p')

    p.innerText = comment
    list.appendChild(p)
    form.reset()
  })
}

  startTimer()
  handleIncrement()
  handleLikes()
  handlePause()
  handleComments()
});
