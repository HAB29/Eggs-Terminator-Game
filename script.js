 //( 1)
 

//we get the html elements

 //  to active the click letters
// select all letter buttons
let letterBtns = document.querySelectorAll('.letter');
//Add an eventlistener for each letter
letterBtns.forEach(letter=>letter.addEventListener("click", letterClicked))
let guesses = document.querySelector("#guesses")
// Create an array of words
let words = ['KAREEM','ALEX','AHLAM', 'TAYLOR' , 'NAHEED','TAHER']
let lineContainer = document.querySelector('.line-container')
let eggNum = 1
let randomWord = words[Math.floor(Math.random() * words.length)]

randomWord.toUpperCase().split('').forEach(letter => {
    let line = document.createElement('div')
    line.classList.add('line')
    line.innerText = '_'
    lineContainer.appendChild(line)    
})

// userLetter
// words array (correct word)
// check if the user clicked on a letter that is inside the word
// use if/else to find it
//write if else condition 
// if words.includes(userLetter) then display letter on blank spot, else show wrong letter or display negative points



    //( 2)

//i creat a function letter clicked on the line and i used  if condition for it

function letterClicked (e){
    console.log(e.target.innerText)
    let userLetter = e.target.innerText
    
    if (randomWord.toUpperCase().includes(userLetter)){

        //CONSOLE LOG CORRECT! IF THEY GUSSED THE RIGHT LETTER

        console.log('correct!')

        // in the word Sarah, h has an index of 4
        let indexOfLetter = randomWord.toUpperCase().indexOf(userLetter)
        console.log(lineContainer)
        console.log(indexOfLetter)
        console.log(randomWord)

        //(3)

        lineContainer.children[indexOfLetter].innerHTML = userLetter
        // we take the ___ at index 4, and replace the _ with the letter h

        randomWord.split('').forEach((randomLetter, index) => {
            if (randomLetter == userLetter){
                lineContainer.children[index].innerHTML = userLetter
            }
          })
    } else {

       //CONSOLE LOG INCORRECT! IF THEY GUSSED THE RIGHT LETTER
        console.log('incorrect!')
        let egg = document.querySelector(`.egg${eggNum}`)
        egg.style.backgroundImage = "url('https://images.squarespace-cdn.com/content/v1/57cc635d46c3c4013750884a/1562708963560-QLIIHQDXOYT995HEVCPZ/cry.gif?format=750w')"
        egg.style.backgroundSize = "cover"
        
        if (eggNum == 6) {
            console.log('you lost!')
        } else {
            eggNum++
        }
        guesses.innerText = `${6- eggNum}`
            

    }
  
}

// playAgain.addEventListener("click", restartGame)
//  function restartGame () {
//     let playAgain = document.querySelector(".playAgain")


