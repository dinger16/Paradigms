import random

class GameState:
    def __init__(self):
        self.good_letters = []
        self.bad_letters = []
        self.correct_letters = ["", "", "", "", ""]
    
    def update_good_letter(self, letter):
        if letter not in self.good_letters:
            self.good_letters.append(letter)

    def update_bad_letter(self, letter):
        if letter not in self.bad_letters:
            self.bad_letters.append(letter)

    def update_correct_letter(self, letter, position):
        self.correct_letters[position] = letter

    def __str__(self):
        return "Good Letters : {}\nBad Letters: {}\nCorrect Letters: {}".format(self.good_letters, self.bad_letters, self.correct_letters)

def valid_word(word, words):
    '''Checks if word is 5 letters'''
    return isinstance(word, str) and len(word) == 5 and word.isalpha() and word.upper() in words

# read words from words.txt
fhr = open('words.txt', 'r')
lines = fhr.readlines()

# read words into an array
words = []
for line in lines:
    words.append(line.rstrip())
fhr.close()

# pick random word
answer = words[random.randint(0, len(words))]

# write random word to answer.txt
fhw = open("answer.txt", "w")
fhw.writelines(answer)
fhw.close()


# initialize game
game = GameState()
tries = 0
win = False

while tries < 6:
    guess = input("Please enter a word to guess: ")
    if valid_word(guess, words):
        guess = guess.upper()

        for i in range(len(guess)):
            if guess[i] in answer:
                game.update_good_letter(guess[i])
            else:
                game.update_bad_letter(guess[i])

            if guess[i] == answer[i]:
                game.update_correct_letter(guess[i], i)
        
        # display current game state
        print(game)
        if "" not in game.correct_letters:
            win = True
            break
        else:
            tries += 1

    else:
        print("Please enter a valid five letter word!")

    continue

if win:
    print("Congratulations, you win!")
else:
    print("You ran out of guess. Better luck next time!")
    print("The correct answer was: {}".format(answer))