const fs = require('fs');
const readline = require("readline");

class GameState{
	constructor(good_letters, bad_letters, correct_letters){
		this.good_letters = good_letters;
		this.bad_letters = bad_letters;
		this.correct_letters = correct_letters;
	}
}

function loadWords() { return fs.readFileSync("five-letter-words.txt","utf8").split('\n') };

function wordleHelper(state){ 
    let originalWords = loadWords();

    let commonWords = new Set()
    allWords = []
    originalWords.forEach(word => {
        if (word[0] === '*') {
            word = word.substring(1, word.length);
            commonWords.add(word);
        }
        allWords.push(word);
    })

    let potentialWords = []

    for (let i = 0; i < allWords.length; i++) {
        if (hasBadLetters(new Set(allWords[i]), state.bad_letters))
            continue;
        else {
            if (!hasGoodLetters(new Set(allWords[i]), state.good_letters))
                continue;
            else
                if (correctLetters(allWords[i], state.correct_letters)) {
                    potentialWords.push(allWords[i]);
                }
        }
    }
    let commonPotential = potentialWords.filter(word => commonWords.has(word))
    let uncommonPotential = potentialWords.filter(word => !commonWords.has(word))

    return [].concat(commonPotential.sort()).concat(uncommonPotential.sort())
}

function hasBadLetters(word, badLetters) {
    return badLetters.find(letter => word.has(letter)) != undefined;
}

function hasGoodLetters(word, goodLetters) {
    return goodLetters.every(letter => word.has(letter));
}

function correctLetters(word, correctLetters) {
    for (let i = 0; i < correctLetters.length; i++) {
        if (correctLetters[i] != undefined && correctLetters[i] != word[i]) return false;
    }
    return true;
}

// state = {
//     good_letters:["S", "A", "R", "G"],
//     bad_letters: ["H", "D", "J", "N", "L", "M", "O", "Z"],
//     correct_letters:["S", undefined, "G", undefined, undefined]
//  }

//  state2 = {
//     good_letters:["O","A", "J"],
//     bad_letters: ["Q","W","E","R","T","Y","M", "K", "N"],
//     correct_letters:[undefined, undefined, undefined, undefined, undefined]
//   }

//  state3 = {
//     good_letters:["S","W", "E", "T"],
//     bad_letters: ["Q","R","Y","M", "K", "N", "R"],
//     correct_letters:["S", "W", "E", undefined, "T"]
//   }

state = {
    good_letters:['A', 'K'],
    bad_letters: ['B', 'C'],
    correct_letters:['A', undefined, undefined, undefined, undefined]
 }
  
console.log(`${wordleHelper(state)}`)
// console.log(`${wordleHelper(state2)}`)
// console.log(`${wordleHelper(state3)}`)