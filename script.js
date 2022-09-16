
function random() {
	// image one random dice display
let randomDice1 = Math.floor(Math.random() *6) + 1;

let randomImage1 = document.querySelector('.img1').setAttribute('src', `images/dice${randomDice1}.png`)

// image two random dice display
let randomDice2 = Math.floor(Math.random() *6) + 1;

let randomImage2 = document.querySelector('.img2').setAttribute('src', `images/dice${randomDice2}.png`)


if(randomDice2 > randomDice1) {
	document.querySelector('h1').innerHTML = 'Player two won!!'
} else if (randomDice2 < randomDice1) {
	document.querySelector('h1').innerHTML = 'Player one won!!'
} else {
	document.querySelector('h1').innerHTML = 'its a draw!!'
}
}
