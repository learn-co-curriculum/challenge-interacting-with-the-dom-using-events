document.addEventListener('DOMContentLoaded', function(){

let counter = document.getElementById('counter')

//Start timer count
setInterval(() => {
  counter.innerText++
}, '1000')

//Manually increment timer
//Grab timer button
//Add on click
//On click manually increase timer

let plus = document.getElementById('plus')
let minus = document.getElementById('minus')

plus.addEventListener('click', (e) => {
  counter.innerText++
})

minus.addEventListener('click', (e) => {
  counter.innerText--
})


let heart = document.getElementById('heart')
let likeCounter = null
let currentLikes = 0

heart.addEventListener('click', (e) => {
  // console.log(counter.innerText)
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



  
});
