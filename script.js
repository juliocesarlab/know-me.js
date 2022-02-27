const typewriterContent = document.querySelector('#typewriter-content')
const phrases = ["Júlio César", "Front-end Developer", "Designer"]

let phraseIndex = 0
let phraseLetterIndex = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

const loop = () => {
  isEnd = false
  if (phraseIndex < phrases.length) {

    if (phraseLetterIndex <= phrases[phraseIndex].length && !isDeleting) {
      currentPhrase.push(phrases[phraseIndex][phraseLetterIndex])
      typewriterContent.innerHTML = currentPhrase.join('')
      phraseLetterIndex++
    } 

    if (isDeleting && phraseLetterIndex <= phrases[phraseIndex].length) {
      currentPhrase.pop(phrases[phraseIndex][phraseLetterIndex])
      phraseLetterIndex--
      typewriterContent.innerHTML = currentPhrase.join('')
    }

    if (phraseLetterIndex === phrases[phraseIndex].length) {
      isDeleting = true
      isEnd= true
    }
    
    if (isDeleting && phraseLetterIndex === 0) {
      currentPhrase = []
      isDeleting = false
      phraseIndex++
      if (phraseIndex === phrases.length) {
        phraseIndex = 0
      }
    }
  }

  const speedUp = Math.random() * (80 - 50) + 50
  const normalSpeed = Math.random() * (300 - 400) + 300
  const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed

  setTimeout(loop, time)
}

loop()

