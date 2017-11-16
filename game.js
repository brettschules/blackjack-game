class Cards {
  constructor() {
    this.cards = {"A": 11, "K": 10, "Q": 10, "J": 10, "10": 10, "9": 9, "8": 8,
    "7": 7, "6": 6, "5": 5, "4": 4, "3": 3, "2": 2, "1": 1}
  }

  generateRandomCard() {
    const cardDesk = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
    let generateRandNum = Math.floor(Math.random() * 14)

    return cardDesk[generateRandNum]
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.playerCurrentCards = [];
    this.balance = 2000;
  }

  bet(value) {
    this.balance -= value
  }

  hit(card, cardValue) {
    this.playerCurrentCards.push(card)
    this.score += cardValue
  }

  stay() {

  }

  renderPlayerCards() {
    return (
      '<div></div>'
    )
  }
}

class Dealer {
  constructor() {
    this.score = 0;
    this.dealerCurrentCards = null;
  }

  hit(card) {
    this.dealerCurrentCards.push(card)
    this.score += scoreValue
  }

  stay() {

  }
}

class GameRules {

}

class GamePlay {
  constructor() {
    this.player = new Player()
    this.cards = new Cards()
    this.hitButton = document.querySelector(".hit-button")
    this.hitButton.addEventListener('click', this.onHitClick.bind(this))
  }

  getCardValue(cardType) {
    return this.cards.cards[cardType]
  }

  onHitClick() {
    let generateCard = this.cards.generateRandomCard()
    this.player.hit(generateCard, this.getCardValue(generateCard))
    console.log(this.player.score)
  }
  game() {
    console.log(this.player.score)
  }
}

class App {
  constructor() {
    this.gamePlay = new GamePlay()
    this.gamePlay.game()
  }

}

const BlackJack = new App()
