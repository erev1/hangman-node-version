var Letter = require("./letter.js")
var secretWordArray = ["willow", "aurora", "dad", "mom", "jupiter", "cat", "black", "halloween", "witch", "weave", "work", "wax", "love", "hate", "eyebrow", "ketchup"]

//function grabs a random word from the secretWordarray
function chooseRandomWord(array) {
	secretWord = array[Math.floor(Math.random() * array.length)];
	return secretWord
}


function createArrayOfLetterObjects(word) {
	letterObjectArray = []
	for (var i = 0; i < word.length; i++) {

		letterObjectArray.push(new Letter(word[i]))
	}
	return letterObjectArray
}

//constructor creates a word object when called
function Word() {
	this.currentWord = chooseRandomWord(secretWordArray)
	this.letters = createArrayOfLetterObjects(this.currentWord)

}

Word.prototype.contains = function(letter) {
		for (var i = 0; i < this.letters.length; i++) {
			if (letter === this.letters[i].letter) {
				return true
			}
		}
		return false
	}

Word.prototype.output = function(alreadyGuessed) {
		//loop through letters array, on each letter call letter.output
		//and add that to output array
		var output = ""

		for (var i = 0; i < this.letters.length; i++) {
			output = output + this.letters[i].output(alreadyGuessed)
		}
		return output
	}

module.exports = Word