var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var buttonColors = ["red", "blue", "green", "yellow"];

var pointer = 0;

var userChosenColor;

function nextSequence() {
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("." + randomChosenColor).css("opacity", "0.3");
  setTimeout(function () {
    $("." + randomChosenColor).css("opacity", "1.0");
  }, 200);
  playSound(randomChosenColor);
  level++;
}

$(document).on("keydown", function () {
  if (level == 0) setTimeout(nextSequence, 1000);
  else if (level == -1) restartGame();
});

$(".green").on("click", function () {
  if (level > 0) {
    userChosenColor = "green";
    userClickedPattern.push(userChosenColor);
    if (gamePattern[pointer] === userClickedPattern[pointer]) {
      playSound(userChosenColor);
      animatePress(userChosenColor);
      if (pointer === gamePattern.length - 1) {
        pointer = 0;
        userClickedPattern = [];
        setTimeout(nextSequence, 1000);
      } else {
        pointer++;
      }
    } else {
      playSound("wrong");
      $("body").addClass("red");
      setTimeout(function () {
        $("body").removeClass("red");
      }, 300);
      $("#level-title").text("You lost. Press any key to restart");
      level = -1;
    }
  }
});

$(".red").on("click", function () {
  if (level > 0) {
    userChosenColor = "red";
    userClickedPattern.push(userChosenColor);
    if (gamePattern[pointer] === userClickedPattern[pointer]) {
      playSound(userChosenColor);
      animatePress(userChosenColor);
      if (pointer === gamePattern.length - 1) {
        pointer = 0;
        userClickedPattern = [];
        setTimeout(nextSequence, 1000);
      } else {
        pointer++;
      }
    } else {
      playSound("wrong");
      $("body").addClass("red");
      setTimeout(function () {
        $("body").removeClass("red");
      }, 300);
      $("#level-title").text("You lost. Press any key to restart");
      level = -1;
    }
  }
});

$(".blue").on("click", function () {
  if (level > 0) {
    userChosenColor = "blue";
    userClickedPattern.push(userChosenColor);
    if (gamePattern[pointer] === userClickedPattern[pointer]) {
      playSound(userChosenColor);
      animatePress(userChosenColor);
      if (pointer === gamePattern.length - 1) {
        pointer = 0;
        userClickedPattern = [];
        setTimeout(nextSequence, 1000);
      } else {
        pointer++;
      }
    } else {
      playSound("wrong");
      $("body").addClass("red");
      setTimeout(function () {
        $("body").removeClass("red");
      }, 300);
      $("#level-title").text("You lost. Press any key to restart");
      level = -1;
    }
  }
});

$(".yellow").on("click", function () {
  if (level > 0) {
    userChosenColor = "yellow";
    userClickedPattern.push(userChosenColor);
    if (gamePattern[pointer] === userClickedPattern[pointer]) {
      playSound(userChosenColor);
      animatePress(userChosenColor);
      if (pointer === gamePattern.length - 1) {
        pointer = 0;
        userClickedPattern = [];
        setTimeout(nextSequence, 1000);
      } else {
        pointer++;
      }
    } else {
      playSound("wrong");
      $("body").addClass("red");
      setTimeout(function () {
        $("body").removeClass("red");
      }, 300);
      $("#level-title").text("You lost. Press any key to restart");
      level = -1;
    }
  }
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(className) {
  $("." + className).addClass("pressed");
  setTimeout(function () {
    $("." + className).removeClass("pressed");
  }, 100);
}

function restartGame() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  setTimeout(nextSequence, 1000);
}
