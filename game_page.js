player1Name = localStorage.getItem("Name1");
player2Name = localStorage.getItem("Name2");
player1Score = 0;
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;
function send() {
    getword = document.getElementById("word").value;
    getword = getword.toLowerCase();

    secondLetter = getword.charAt(1);

    middlePosition = Math.floor(getword.length / 2);
    middleLetter = getword.charAt(middlePosition);

    lastPosition = getword.length - 1;
    lastLetter = getword.charAt(lastPosition);

    word = getword.replace(secondLetter, "_");
    word = word.replace(middleLetter, "_");
    word = word.replace(lastLetter, "_");

    question_word = "<h4 id='word_display'> Q. " + word + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

questionTurn = "player1";
answerTurn = "player2";

function check() {
    answer = document.getElementById("input_check_box").value;
    answer = answer.toLowerCase();
    if (answer == getword) {
        if (answerTurn == "player1") {
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;
        }
        else {
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }
    if (questionTurn == "player1") {
        questionTurn = "player2";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player2Name;
    }
    else {
        questionTurn = "player1";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
    }

    if (answerTurn == "player1") {
        answerTurn = "player2";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;
    }
    else {
        answerTurn = "player1";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player1Name;
    }
    document.getElementById("output").innerHTML = "";
}
