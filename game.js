let questions = [
    {
        question:
          "What year did the miami Dolphins went underdeafted and won 17 Games plus a superbowl? ",
        choices: ["1972", "1960", "1792", "1971"],
        answer: "1972",
      },
      {
        question: "How many teams play in the NFL?",
        choices: ["70", "60", "17", "32"],
        answer: "32 Teams",
      },
    {
        question: "How many head coaches are there in the NFL?",
        choices: ["10", "60", "17", "32"],
        answer: "32"
    },
    {
        question: " How many Superbowls have Miami Dolphins win?",
        choices: ["0", "6", "1", "2"],
        answer: "2",
    },
    {
        question: "How many Superbowls have the Bufalo Bills win?",
        choices: ["0", "6", "1", "2"],
        answer: "0",
    }
  ];
  let currentQuestion = 0;
  let score = 0;
  let timerInterval;
  let timeLeft = 60;
  
  // Update the question and choices on the page
  function updateQuestion() {
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    let choicesHTML = "";
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
      choicesHTML += `<label><input type="radio" name="answer" value="${questions[currentQuestion].choices[i]}">${questions[currentQuestion].choices[i]}</label><br>`;
    }
    document.getElementById("choices").innerHTML = choicesHTML;
  }
  
  // Start the countdown timer
  function startTimer() {
    timerInterval = setInterval(function() {
      if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("timer").innerHTML = "Time Left: " + timeLeft + " seconds";
      } else {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "Time's up!";
        endGame();
      }
    }, 1000);
  }
  
  // Stop the countdown timer
  function stopTimer() {
    clearInterval(timerInterval);
    timeLeft = 60;
    document.getElementById("timer").innerHTML = "Time Left: " + timeLeft + " seconds";
  }
  
  // Check the user's answer and update the score
  function checkAnswer() {
    let selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    if (selectedAnswer === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      updateQuestion();
    } else {
      endGame();
    }
  }
  
  // End the game and display the final score
 function endGame() {
  stopTimer();
  document.getElementById("question").innerHTML = "Game Over";
  document.getElementById("choices").innerHTML = "";
  document.getElementById("score").innerHTML = "Final Score: " + score;
  document.getElementById("timer").innerHTML = "New Game";
}
function playAgain() {
    score = 0;
    currentQuestion = 0;
    document.getElementById("score").innerHTML = "Score: " + score;
    displayQuestion();
  }
  // Start the game
  
  updateQuestion();
  startTimer();
  