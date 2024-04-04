class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  // 2. getQuestion()
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // 3. moveToNextQuestion()
  moveToNextQuestion() {
    this.currentQuestionIndex++;
    // /** second method:
    //  * for (let i = 0; i < this.questions.length; i++) {
    //   if (i === this.currentQuestionIndex) {
    //     this.currentQuestionIndex = (i + 1) % this.questions.length;
    //     break;
    //   }
    // }
    //  */

    // // 3rd method:
    // if (this.currentQuestionIndex < this.questions.length - 1) {
    //   this.currentQuestionIndex++;
    // }
  }

  // 4. shuffleQuestions()
  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
  }
  // 5. checkAnswer(answer)
  checkAnswer(answer) {
    let currentQuestion = this.getQuestion();

    // Check if the provided answer matches the correct answer for the current question
    if (currentQuestion.answer === answer) {
      this.correctAnswers++; // Increment correctAnswers by 1
    }
  }

  // 6. hasEnded()
  hasEnded() {
    return this.currentQuestionIndex === this.questions.length;
  }

  //Development Tasks:
  //filterQuestionsByDifficulty(difficulty) method:

  filterQuestionsByDifficulty(difficulty) {
    // Check if the difficulty argument is a number between 1 and 3
    if (typeof difficulty !== "number" || difficulty < 1 || difficulty > 3) {
      return;
    }

    // Filter questions array to contain only questions with the specified difficulty
    this.questions = this.questions.filter(
      (question) => question.difficulty === difficulty
    );
  }

  //averageDifficulty() method:
  averageDifficulty() {
    if (this.questions.length === 0) {
      return 0;
    }

    // Calculate the total difficulty sum
    let totalDifficulty = 0;
    for (let i = 0; i < this.questions.length; i++) {
      totalDifficulty += this.questions[i].difficulty;
    }

    // Calculate the average difficulty
    return totalDifficulty / this.questions.length;
  }
}
