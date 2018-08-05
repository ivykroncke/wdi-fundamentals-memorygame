//array for cards
var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png'
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png'
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png'
},
{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png'
}
];

//array for cards in play
var cardsInPlay = [];

var checkForMatch = function(){
	//do they match?
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	cardId.setAttribute('src', cards[cardID].cardImage);
	if(cardsInPlay.length === 2){
		checkForMatch();
	}
};

var createBoard = function(){
	for (var i = 0; i <= cards.length - 1; i++){
		var cardElement = document.createElement('img');	
 	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
}
};

createBoard();
