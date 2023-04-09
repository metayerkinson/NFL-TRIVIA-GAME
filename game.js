const questions = [
    {
      question: "What year did the miami Dolphins went underdeafted and won 17 Games and a superbowl? ",
      choices: ["1960", "1990", "1970", "1980"],
      answer: "1970"
    },
    {
      question: "How many teams play in the NFL?",
      choices: ["16", "32", "25", "31"],
      answer: "32 Teams"
    },
    {
      question: "How many head coaches are there in the NFL?",
      choices: ["36", "22", "25", "32"],
      answer: "32"
    },
    {
      question: " How many Superbowls have Miami Dolphins win?",
      choices: ["6", "2", "5", "12"],
      answer: "2"
    },
    {
      question: "How many Superbowls have the Bufalo Bills win?",
      choices: ["6", "2", "1", "0"],
      answer: "0"
    }
  ];
  

  let score = 0;
  let currentQuestion = 0;
  
  // Display the current question on the page
  function displayQuestion() {
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
  }
  
  // Check the user's answer and update the score
  function checkAnswer() {
    const answer = document.getElementById("answer").value;
    if (answer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      score++;
      document.getElementById("score").innerHTML = "Score: " + score;
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      endGame();
    } else {
      displayQuestion();
      document.getElementById("answer").value = "";
    }
  }
  
  // When the game  finished show  the final score
  function endGame() {
    document.getElementById("question").innerHTML = "Game Over!";
    document.getElementById("answer").style.display = "none";
    document.getElementById("score").innerHTML = "Final Score: " + score;
  }
  
  // Resart the game to play again
  function playAgain() {
    score = 0;
    currentQuestion = 0;
    document.getElementById("answer").style.display = "block";
    document.getElementById("score").innerHTML = "Score: " + score;
    displayQuestion();
  }
  
  // place question screen 
  displayQuestion();