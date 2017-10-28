function Letter(letter) {
	this.letter = letter
		//if this letter is in the already guessed array, return
		//the letter, if not then return a blank underscore "_"
	this.output = function(alreadyGuessed) {
		if (alreadyGuessed.indexOf(this.letter) > -1) {
			return this.letter
		}
		return "_"
	}
}
module.exports = Letter