var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId]);
	checkforMatch();
}

if(cardsInPlay.length === 2 && cardsInPlay[0]===cardsInPlay[2]) {
	alert("You Found a Match!");
} else {
	alert("Sorry, try again.");
};


