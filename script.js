const phrases = ["Júlio César", "Front-end Developer", "Designer"]
const typeWritterContent = document.querySelector('#typeWritterContent')

class TypeMachine {
  constructor(phrasesArr, htmlElement, speed) {
    this.phrases = phrasesArr;
    this.text = htmlElement;
    this.speed = speed;

    this.i = 0;
    this.j = 0;
    this.isDeleting = false;
    this.actualPhrase = [];
  }

  alternatePhrases() {
    this.speed = 200
    if (this.i < this.phrases.length) {
      
      if(this.j <= this.phrases[this.i].length && !this.isDeleting) {
        this.actualPhrase.push(this.phrases[this.i][this.j])
        this.text.innerHTML = this.actualPhrase.join('')
        this.j++
      }
  
      if (this.isDeleting) {
        this.speed = 50
        if (this.j === 0) {
          this.isDeleting = false
          this.i = (this.i + 1) === this.phrases.length ?  0 : (this.i + 1)
        } else {
          this.actualPhrase.pop()
          this.j--
          this.text.innerHTML = this.actualPhrase.join('')
        }
      }
    
      if (this.j === this.phrases[this.i].length) this.isDeleting = true  
    }
    setTimeout(this.alternatePhrases.bind(this), this.speed)
  }
  
}

new TypeMachine(phrases, typeWritterContent ,250).alternatePhrases()