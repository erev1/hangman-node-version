var inquirer = require("inquirer")
var Word = require("./word.js")

var alreadyGuessed = []
var word = new Word()
var guessesLeft = 10


inquirer
	.prompt([{
		type: "confirm",
		message: "Ready?",
		name: "ready"
	}])
	.then(function(inquirerResponse) {
		if (inquirerResponse.ready) {
			rungame()
		} else {
			console.log("Ok! Come back later")
		}
	})

function rungame() {
	console.log(word.output(alreadyGuessed))
	inquirer
		.prompt([{
			type: "input",
			message: "enter a letter",
			name: "letter"
		}])
		.then(function(inquirerResponse) {

			if (alreadyGuessed.indexOf(inquirerResponse.letter) > -1) {
				rungame()
				return
			}

			alreadyGuessed.push(inquirerResponse.letter)
			if (word.output(alreadyGuessed) === word.currentWord) {
				console.log("cool you guessed it. the word was:")
				console.log(word.currentWord)
				console.log("Next word!")
				alreadyGuessed = []
				word = new Word()
				guessesLeft = 10
				rungame()
				return

			} else {
				if (!word.contains(inquirerResponse.letter)) {
					guessesLeft -= 1
				}

				if (guessesLeft === 0) {
					console.log("oh no you lost. the word was:")
					console.log(word.currentWord)
					inquirer
						.prompt([{
							type: "confirm",
							message: "Do you want to continue to another word?",
							name: "continue"
						}])
						.then(lose)

				} else {
					console.log("You have " + guessesLeft + " guesses left!")
					rungame()
				}
			}

		})
}

function lose(inquirerResponse) {
	if (inquirerResponse.continue) {
		alreadyGuessed = []
		word = new Word()
		guessesLeft = 10
		rungame()
		return
	} else {
		console.log("Ok! Come back later")
	}
}