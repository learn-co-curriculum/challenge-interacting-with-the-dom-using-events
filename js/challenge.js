//timer
const timer = document.querySelector("h1#counter") 
const plusButton = document.querySelector("#plus")
const pauseButton = document.querySelector("#pause") 
const minusButton = document.querySelector("#minus") 

myClock = setInterval(updateCounter, 1000)

function updateCounter() {
  let count = parseInt(timer.innerText);
  count ++;
  timer.innerText = count 
}


// "click" - button reduces
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


// "click" - button pause

pauseButton.addEventListener('click', function() {
  if (myClock == -1) {
    pauseButton.textContent = "pause"  
    myClock = setInterval(updateCounter, 1000)
  }else {
    pauseButton.textContent = "resume"
    clearInterval(myClock);
    myClock = -1
  }
})



// "click" - button likes
const likeButton = document.querySelector("#heart") 
const listOFLikes = document.querySelector(".likes") 



// target input form submit
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



//input from submit it logged in comments section
// const commentLocation = document.querySelector("#list") 
// // input is logged in a p tag .... create element p 
// commentLocation.append(p)

//button response 
//like button add "number has been liked num time" .... add to ul as a li element
