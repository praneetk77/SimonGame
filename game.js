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
});

$(".green").on("click", function () {
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
    $("#level-title").text("Haar gaya bhadwe?");
  }
});

$(".red").on("click", function () {
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
    $("#level-title").text("Haar gaya bhadwe?");
  }
});

$(".blue").on("click", function () {
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
    $("#level-title").text("Haar gaya bhadwe?");
  }
});

$(".yellow").on("click", function () {
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
    $("#level-title").text("Haar gaya bhadwe?");
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
