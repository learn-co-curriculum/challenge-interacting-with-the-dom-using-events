const counterElement = document.getElementById(`counter`)
const minusOneFromCounter = document.querySelector(`button`) 
const plusOneToCounter = document.getElementById('plus')
const formElement = document.getElementById('comment-form')
const commentsContainer = document.getElementById('list')
const heartButton = document.getElementById('heart')
const likesContainer = document.querySelector('.likes')
const pauseButton = document.getElementById('pause')
const submitButton = document.getElementById('submit')

let intervalID = setInterval(increment, 1000)
let paused = false

minusOneFromCounter.addEventListener(`click`, ()=> counterElement.innerText--) 

plusOneToCounter.addEventListener('click', () => counterElement.innerText++)

formElement.addEventListener('submit', (e) => {

    e.preventDefault()

    // Get user's comment
    const theComment = e.target.comment.value
    // put that text in a new element
    const p = document.createElement('p')
    p.innerText = theComment
    // append the new element to the DOM
    commentsContainer.append(p)
    e.target.reset()
})

heartButton.addEventListener('click', () => {
    const theNumber = counterElement.innerText
    const foundLi = document.getElementById(`num-${theNumber}`)

    if (foundLi) {
        const thatSpan = foundLi.querySelector('span')
        thatSpan.innerText++
        if(thatSpan.innerText == 2)
        foundLi.append('s')
    } else {
    const theText = theNumber + " has been liked <span>1</span> time"
    const li = document.createElement('li')
    li.id = `num-${theNumber}`
    li.innerHTML = theText
    likesContainer.append(li)
    }

} )

pauseButton.addEventListener('click', () => {
    paused = !paused
    const buttons = [plusOneToCounter, minusOneFromCounter, heartButton, submitButton]
    buttons.forEach(button => button.disabled = paused)
    pauseButton.innerText = paused ? 'resume' : 'pause'
    if(paused) {
        clearInterval(intervalID)
    } else {
        intervalID = setInterval(increment, 1000)
    }
})

function increment() {
    counterElement.innerText++
}