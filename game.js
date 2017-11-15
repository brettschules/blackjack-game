class Cards {
  constructor() {
    this.cards = {"A": 11, "K": 10, "Q": 10, "J": 10, "10": 10, "9": 9, "8": 8,
    "7": 7, "6": 6, "5": 5, "4": 4, "3": 3, "2": 2, "1", 1}
  }

  randomCard() {
    const cardDesk = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
    let generateRandNum = Math.floor(Math.random() * 14)

    return cardDesk[generateRandNum]
  }
}

class Player {

}

class Computer {

}

class GameRules {

}

class GamePlay {

}

class App {
  
}
