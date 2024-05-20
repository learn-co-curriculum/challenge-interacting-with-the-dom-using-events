//timer
const timer = document.querySelector("h1#counter") 
let time = 0
let myClock = -1

function updateCounter() {
  let count = parseInt(timer.innerText);
  count ++;
  timer.innerText = count 
}
  myClock = setInterval(updateCounter, 1000)


// "click" - button reduces
const minusButton = document.querySelector("#minus") 

minusButton.addEventListener("click", function () )

// 
// "click" - button add
const plusButton = document.querySelector("#plus") 
// "click" - button pause



const pauseButton = document.querySelector("#pause") 

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
