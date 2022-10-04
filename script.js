//I WANT THE WORDS TO POP UP
//I WANT WHEN I CLICK THE LETTERS ..


const letters = document.getElementById('btn');
const wrongLetterS = document.getElementById('wrong-letters');
// let selectedWord = word[Math.floor(Math.random() * words.length)];


// select all letter buttons
let letterBtns = document.querySelectorAll('.letter');
// console.log(letterBtns)
//Add an eventlistener for each letter
letterBtns.forEach(letter=>letter.addEventListener("click", letterClicked))

let words = ['Hessa','sarah','mai']
let lineContainer = document.querySelector('.line-container')

let word = words[Math.floor(Math.random() * words.length)]

word.split('').forEach(letter => {
    let line = document.createElement('div')
    line.classList.add('line')
    line.innerText = '_'
    lineContainer.appendChild(line)    
})


  function letterClicked (e){
    console.log(e.target.innerText)
    let userLetter = e.target.innerText
    

    // userLetter
    // words array (correct word)
    // check if the user clicked on a letter that is inside the word
    // use if/else to find it
    //write if else condition 
    // if words.includes(userLetter) then display letter on blank spot, else show wrong letter or display negative points



//     let word = e.taget.innerText
//     letters.innerText = word
}

// letterBtns.addEventListener("click", letterClicked)

//Show hidden word?