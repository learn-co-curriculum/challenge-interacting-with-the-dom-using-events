document.addEventListener('DOMContentLoaded', function(){

let counter = document.getElementById('counter')

//Start timer count
// const startTimer = setInterval(() => {
//   counter.innerText++
// }, '1000')


// function startTimer() {
//   setInterval(() => {
//     counter.innerText++
//   }, '1000')
// }


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

  //Pause Counter
  //Disable all buttons except pause
  //Switch label from pause to resume 

  //Grab Pause Button
  //On Click Event Listener 
  //set clearInterval
  //Change innerText to resume
  //Add Disable property to buttons
  //Create conditional
  //if innerText = pause
  //else if innerText = Resume
  //Remove disable
  //Restart timer

  let timer

  function startTimer() {
    timer = setInterval(() => {
      counter.innerText++;
    }, 1000)
  }
    startTimer()
  
  let pause = document.getElementById('pause')

  pause.addEventListener('click', (e) => {
    if (pause.innerText === 'pause') {
      clearInterval(timer)
      pause.innerText = 'resume'
      heart.disabled = true
    } else if (pause.innerText === 'resume') {
      startTimer()
      pause.innerText = 'pause'
      heart.disabled = false

    }
  });







});
