var teamAPoints = 0;
var teamBPoints = 0;
var gameClockClicked = false;
var gameClockRunning = false;
var gameCounter = 480;
var questionClockClicked = false;
var questionClockRunning = false;
var questionCounter = 0;

function secondsToText(secondsOnClock) {
  var minutes = Math.floor(secondsOnClock / 60);
  var seconds = secondsOnClock % 60;
  var secondsString = seconds.toString();
  if (secondsString.length == 1) {
    secondsString = "0" + secondsString;
  }
  return minutes + ":" + secondsString;
}

function blinkIt(div) {
  divID = "#" + div;
  var runs = 0;

  function timer() {
    if (runs >= 5) {
      $(divID).css("background-color", "#cccccc");
      clearInterval(interval);
    } else if (runs < 5 && runs % 2 == 1) {
      runs = runs + 1;
      $(divID).css("background-color", "#cccccc");
    } else if (runs < 5 && runs % 2 == 0) {
      runs = runs + 1;
      $(divID).css("background-color", "red");
    } else {}
  }
  var interval = setInterval(timer, 500);
}

function fontSizer(text, box, scale) {
  var textID = "#" + text;
  var boxID = "#" + box;
  var boxHeight = $(boxID).height();
  var boxWidth = $(boxID).width();
  var fontSize = 0;
  if (boxHeight >= boxWidth) {
    fontSize = (boxWidth * scale) + "px";
  } else if (boxHeight < boxWidth) {
    fontSize = (boxHeight * scale) + "px";
  } else {}

  var textHeight = $(textID).height();
  var textWidth = $(textID).width();

  if (textWidth > boxWidth) {
    fontSize = ((fontSize * (scale * boxWidth)) / (textWidth)) + "px";
  } else {}

  $(textID).css("font-size", fontSize);
}

///////////////////////////////////////////////////////////////

$(document).ready(function() {
  $("#TeamAPointText").html(teamAPoints);
  $("#TeamBPointText").html(teamBPoints);
  $("#GameClockText").html("8:00");
  $("#QuestionClockText").html("0:00");
  fontSizer("TeamALabelText", "TeamALabel", 0.5);
  fontSizer("GameLabelText", "GameLabel", 0.5)
  fontSizer("TeamBLabelText", "TeamBLabel", 0.5);
  fontSizer("TeamAPointText", "TeamAPointBox", 0.8);
  fontSizer("TeamBPointText", "TeamBPointBox", 0.8);
  fontSizer("GameClockText", "GameClockBox", 0.8);
  fontSizer("QuestionClockText", "QuestionClockBox", 0.8);
  $(window).resize(function() {
    fontSizer("TeamALabelText", "TeamALabel", 0.5);
    fontSizer("GameLabelText", "GameLabel", 0.5)
    fontSizer("TeamBLabelText", "TeamBLabel", 0.5);
    fontSizer("TeamAPointText", "TeamAPointBox", 0.8);
    fontSizer("TeamBPointText", "TeamBPointBox", 0.8);
    fontSizer("GameClockText", "GameClockBox", 0.8);
    fontSizer("QuestionClockText", "QuestionClockBox", 0.8);

  });
});

///////////////////////////////////////////////////////////////

function spGameClock() {
  if (gameClockRunning == false) {
    gameClockRunning = true;
  } else {
    gameClockRunning = false;
  }

  function timer() {
    if (gameCounter == 0) {
      clearInterval(interval);
      $("#GameClockText").html(secondsToText(gameCounter));
      blinkIt("GameClockBox");
      gameClockClicked = false;
    } else if (gameCounter > 0 && gameClockRunning == true) {
      $("#GameClockText").html(secondsToText(gameCounter));
      gameCounter = gameCounter - 1;
    } else if (gameCounter > 0 && gameClockRunning == false) {
      clearInterval(interval);
    } else {}
  }

  if (gameClockClicked == false){
    gameClockClicked = true;
    var interval = setInterval(timer, 1000);
  } else {}
}

function resetGameClock() {
  gameClockRunning = false;
  gameClockClicked = false;
  gameCounter = 480;
  $("#GameClockText").html("8:00");
  $("#GameClockBox").css("background-color", "#cccccc");
}

///////////////////////////////////////////////////////////////

function p4A() {
  teamAPoints = teamAPoints + 4;
  $("#TeamAPointText").html(teamAPoints);
}

function p10A() {
  teamAPoints = teamAPoints + 10;
  $("#TeamAPointText").html(teamAPoints);
}

function m4A() {
  teamAPoints = teamAPoints - 4;
  $("#TeamAPointText").html(teamAPoints);
}

function m10A() {
  teamAPoints = teamAPoints - 10;
  $("#TeamAPointText").html(teamAPoints);
}

//////////////////////////////////////////////////////////////

function tuQC() {
  if (questionClockClicked == false) {
    questionClockClicked = true;
    questionCounter = 5;
    $("#QuestionClockBox").css("background-color", "#cccccc");
    if (questionClockRunning == false) {
      questionClockRunning = true;
    } else {}

    function timer() {
      if (questionClockRunning == true && questionCounter == 0) {
        clearInterval(interval);
        $("#QuestionClockText").html(secondsToText(questionCounter));
        blinkIt("QuestionClockBox");
        questionClockClicked = false;
      } else if (questionClockRunning == false) {
        clearInterval(interval);
      } else if (questionClockRunning == true && questionCounter > 0) {
        $("#QuestionClockText").html(secondsToText(questionCounter));
        questionCounter = questionCounter - 1;
      }
    }
    var interval = setInterval(timer, 1000);
  }
}

function bQC() {
  if (questionClockClicked == false) {
    questionClockClicked = true;
    $("#QuestionClockBox").css("background-color", "#cccccc");
    questionCounter = 20;
    if (questionClockRunning == false) {
      questionClockRunning = true;
    } else {}

    function timer() {
      if (questionClockRunning == true && questionCounter == 0) {
        clearInterval(interval);
        $("#QuestionClockText").html(secondsToText(questionCounter));
        blinkIt("QuestionClockBox");
        questionClockClicked = false;
      } else if (questionClockRunning == false) {
        clearInterval(interval);
      } else if (questionClockRunning == true && questionCounter > 0) {
        $("#QuestionClockText").html(secondsToText(questionCounter));
        questionCounter = questionCounter - 1;
      }
    }
    var interval = setInterval(timer, 1000);
  }

}

function rQC() {
  questionClockRunning = false;
  questionClockClicked = false;
  $("#QuestionClockBox").css("background-color", "#cccccc");
  questionCounter = 0;
  $("#QuestionClockText").html("0:00");
}

////////////////////////////////////////////////////////////////

function p4B() {
  teamBPoints = teamBPoints + 4;
  $("#TeamBPointText").html(teamBPoints);
}

function p10B() {
  teamBPoints = teamBPoints + 10;
  $("#TeamBPointText").html(teamBPoints);
}

function m4B() {
  teamBPoints = teamBPoints - 4;
  $("#TeamBPointText").html(teamBPoints);
}

function m10B() {
  teamBPoints = teamBPoints - 10;
  $("#TeamBPointText").html(teamBPoints);
}
