class Hangman {
  constructor(_canvas) {
    if (!_canvas) {
      throw new Error(`invalid canvas provided`);
    }

    this.canvas = _canvas;
    this.ctx = this.canvas.getContext(`2d`);
  }

  /**
   * This function takes a difficulty string as a patameter
   * would use the Fetch API to get a random word from the Hangman
   * To get an easy word: https://hangman-micro-service-bpblrjerwh.now.sh?difficulty=easy
   * To get an medium word: https://hangman-micro-service-bpblrjerwh.now.sh?difficulty=medium
   * To get an hard word: https://hangman-micro-service-bpblrjerwh.now.sh?difficulty=hard
   * The results is a json object that looks like this:
   *    { word: "book" }
   * */
  getRandomWord(difficulty) {
    return fetch(
      `https://hangman-micro-service-bpblrjerwh.now.sh?difficulty=${difficulty}`
    )
      .then((r) => r.json())
      .then((r) => r.word);
  }

  /**
   *
   * @param {string} difficulty a difficulty string to be passed to the getRandomWord Function
   * @param {function} next callback function to be called after a word is reveived from the API.
   */
  start(difficulty, next) {
    // get word and set it to the class's this.word
    var guessedWord = this.word;
    guessedWord = guessedWord [Math.floor(math.random()* this.guessedWord.length)];
    // clear canvas
   this.clearCanvas();
    // draw base
    this.drawBase();
    // reset this.guesses to empty array
    this.guesses = [];
    // reset this.isOver to false
    this.isOver = false;
    // reset this.didWin to false
    this.didWin = false;
  }

  /**
   *
   * @param {string} letter the guessed letter.
   */
  guess(letter) {
    // Check if nothing was provided and throw an error if so
    if(letter === null){
      console.Error ("Please enter a letter");
    }

    // Check for invalid cases (numbers, symbols, ...) throw an error if it is
      if(letter.length !== 1 && letter.match(/[a-z]/i)){
        console.error ("Make sure you entered a letter");
      }
      
    // Check if more than one letter was provided. throw an error if it is.
    if(letter.length !== 1){
      console.error("Please enter one letter");
    }

    // if it's a letter, convert it to lower case for consistency.
    if(letter.length !== 1 && letter.match(/[a-z]/i)){
      return letter.toLowerCase();
    }
    // check if this.guesses includes the letter. Throw an error if it has been guessed already.
    
    // add the new letter to the guesses array.
    for (var i = 0; i < word.length; i++) {
      this.guesses[i] = "_";
    }
    // check if the word includes the guessed letter:
    //    if it's is call checkWin()
    if (guessed === guessedWord){
      return this.checkWin();
    }

    //    if it's not call onWrongGuess()
    if (guessed ==! guessedWord){
      return this.onWrongGuess();
    }
  }

  checkWin() {
    // using the word and the guesses array, figure out how many remaining unknowns.
    // if zero, set both didWin, and isOver to true

    var ShowpalyerProgress = function (guesses){};

    while (word.length > 0) {
      var showPlayerProgress = function (guesses){};
      showPlayerProgress(guesses);
      if (this.guesses === null) {
      break;
      } else if (guess.length !== 1) {
      alert("Please enter a single letter.");
      } else {
      var updateGame = function (word, guesses) {};
      word.length -= updateGame( word, guesses);;
      }
      }
  }

  /**
   * Based on the number of wrong guesses, this function would determine and call the appropriate drawing function
   * drawHead, drawBody, drawRightArm, drawLeftArm, drawRightLeg, or drawLeftLeg.
   * if the number wrong guesses is 6, then also set isOver to true and didWin to false.
   */
  onWrongGuess(guessed) {
   if (this.guessed === 0) {
    return this.drawHead();
   }
   if (this.guessed === 1) {
    return this.drawBody();
   }

   if (this.guessed === 2) {
    return this.drawLeftArm();
   }

   if (this.guessed === 3) {
    return this.drawRightArm();
   }

   if (this.guessed === 4) {
    return this.drawLeftLeg();
   }
   if (this.guessed === 5) {
    return this.drawRightLeg();
   }
  
  }

  /**
   * This function will return a string of the word placeholder
   * It will have underscores in the correct number and places of the unguessed letters.
   * i.e.: if the word is BOOK, and the letter O has been guessed, this would return _ O O _
   */
  getWordHolderText(word,guessed) {
    for (var i = 0; i < word.length; i++) {
    guessed[i] = "_";
    }
    return guessed;
  }

  /**
   * This function returns a string of all the previous guesses, seperated by a comma
   * This would return something that looks like
   * (Guesses: A, B, C)
   * Hint: use the Array.prototype.join method.
   */
  getGuessesText(guesses) {
    guesses.Array.prototype.join('')
    return ``;
  }

  /**
   * Clears the canvas
   */
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * Draws the hangman base
   */
  drawBase() {
    this.ctx.fillRect(95, 10, 150, 10); // Top
    this.ctx.fillRect(245, 10, 10, 50); // Noose
    this.ctx.fillRect(95, 10, 10, 400); // Main beam
    this.ctx.fillRect(10, 410, 175, 10); // Base
  }

  drawHead() {}

  drawBody() {}

  drawLeftArm() {}

  drawRightArm() {}

  drawLeftLeg() {}

  drawRightLeg() {}
}
