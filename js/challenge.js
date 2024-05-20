//timer
const timer = document.querySelector("h1#counter") 
const plusButton = document.querySelector("#plus")
const pauseButton = document.querySelector("#pause") 
const minusButton = document.querySelector("#minus") 
const submitButton = document.getElementById("submit")

myClock = setInterval(updateCounter, 1000)

function updateCounter() {
  let count = parseInt(timer.innerText);
  count ++;
  timer.innerText = count 
}

minusButton.addEventListener('click', function() {
  let count = parseInt(timer.innerText);
  count --;
  timer.innerText = count 
})

plusButton.addEventListener('click', function() {
  let count = parseInt(timer.innerText);
  count ++;
  timer.innerText = count 
})

pauseButton.addEventListener('click', function() {
  if (myClock == -1) {
    pauseButton.textContent = "pause"  
    myClock = setInterval(updateCounter, 1000)
    plusButton.disabled = false
    minusButton.disabled = false
    likeButton.disabled = false
    submitButton.disabled = false
  } else {
    pauseButton.textContent = "resume"
    clearInterval(myClock);
    plusButton.disabled = true
    minusButton.disabled = true
    likeButton.disabled = true
    submitButton.disabled = true
    myClock = -1
  }
})

const likeButton = document.querySelector("#heart") 

likeButton.addEventListener("click", function() {
  const li = document.createElement("li")
  li.textContent = `${timer.innerText} has been like 1 time`
  document.querySelector("ul.likes").appendChild(li)
})

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#comment-form");
   
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    let inputComment = document.getElementById("comment-input").value
    buildComment(inputComment)
    form.reset()
  })  
})

function buildComment(inputComment) {
  const ul = document.createElement("ul");
  const li = document.createElement("li")
  li.textContent = `${inputComment}`;
  ul.append(li)
  document.getElementById("list").appendChild(ul)
}
