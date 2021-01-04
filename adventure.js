//Generate a random number 

//Give the user ability to guess 

//If they guess and they are wrong, ask them again (hint)

//If they win - say that they won

function guessGame()
{
    let randomNr = Math.floor(Math.random() * 11);
    let guess;

    do{
        guess = prompt('Guess a number between 1-10')
        console.log(guess, randomNr)
        if(randomNr > guess)
        {
            console.log('You guessed too low')
        }
        else if(randomNr < guess )
        {
            console.log('You guessed too high')
        }
    } while(guess != randomNr)
    console.log("YOU WON")

}
guessGame();