var board = document.querySelector(".board")
var winner = document.querySelector(".winner")
var letterXImage = '<img src="./images/letter_x.png" alt="" width="100px">';
var letterOImage = '<img src="./images/letter_o.png" alt="" width="100px">';
var refreshButton = document.querySelector(".refresh")
var squares = document.querySelectorAll(".square");

refreshButton.addEventListener("click", function () {
    location.reload();
})

function checkwinner() {
    if (
        (squares[0].innerHTML === letterXImage &&
            squares[1].innerHTML === letterXImage &&
            squares[2].innerHTML === letterXImage) ||
        (squares[3].innerHTML === letterXImage &&
            squares[4].innerHTML === letterXImage &&
            squares[5].innerHTML === letterXImage) ||
        (squares[6].innerHTML === letterXImage &&
            squares[7].innerHTML === letterXImage &&
            squares[8].innerHTML === letterXImage) ||
        (squares[0].innerHTML === letterXImage &&
            squares[3].innerHTML === letterXImage &&
            squares[6].innerHTML === letterXImage) ||
        (squares[1].innerHTML === letterXImage &&
            squares[4].innerHTML === letterXImage &&
            squares[7].innerHTML === letterXImage) ||
        (squares[2].innerHTML === letterXImage &&
            squares[5].innerHTML === letterXImage &&
            squares[8].innerHTML === letterXImage) ||
        (squares[0].innerHTML === letterXImage &&
            squares[4].innerHTML === letterXImage &&
            squares[8].innerHTML === letterXImage) ||
        (squares[2].innerHTML === letterXImage &&
            squares[4].innerHTML === letterXImage &&
            squares[6].innerHTML === letterXImage)
    ) {
        board.classList.add("invisible")
        winner.classList.remove("invisible")
        winner.innerHTML = "<h1>You are the winner 🏆. Refresh to Play Again 😊</h1>"
        
    } else if (
        (squares[0].innerHTML === letterOImage &&
            squares[1].innerHTML === letterOImage &&
            squares[2].innerHTML === letterOImage) ||
        (squares[3].innerHTML === letterOImage &&
            squares[4].innerHTML === letterOImage &&
            squares[5].innerHTML === letterOImage) ||
        (squares[6].innerHTML === letterOImage &&
            squares[7].innerHTML === letterOImage &&
            squares[8].innerHTML === letterOImage) ||
        (squares[0].innerHTML === letterOImage &&
            squares[3].innerHTML === letterOImage &&
            squares[6].innerHTML === letterOImage) ||
        (squares[1].innerHTML === letterOImage &&
            squares[4].innerHTML === letterOImage &&
            squares[7].innerHTML === letterOImage) ||
        (squares[2].innerHTML === letterOImage &&
            squares[5].innerHTML === letterOImage &&
            squares[8].innerHTML === letterOImage) ||
        (squares[0].innerHTML === letterOImage &&
            squares[4].innerHTML === letterOImage &&
            squares[8].innerHTML === letterOImage) ||
        (squares[2].innerHTML === letterOImage &&
            squares[4].innerHTML === letterOImage &&
            squares[6].innerHTML === letterOImage)
    ) {
        board.classList.add("invisible")
        winner.classList.remove("invisible")
        winner.innerHTML = "<h1>Computer is the winner 🏆. Refresh to Play Again 😊</h1>"
    }
}

function computerChoice() {
    var randomNumber = Math.floor(Math.random() * squares.length);
    while (
        squares[randomNumber].innerHTML === letterOImage ||
        squares[randomNumber].innerHTML === letterXImage
    ) {
        randomNumber = Math.floor(Math.random() * squares.length);
    }
    // checkwinner()
    squares[randomNumber].innerHTML = letterOImage;
}


function gamePlay() {
    squares.forEach((square) => {
        square.addEventListener("click", function () {
            if (square.innerHTML === letterOImage || square.innerHTML === letterXImage) {
                alert("You cannot play there !!!")
            }else{
                square.innerHTML = letterXImage;
                setTimeout(checkwinner, 200);
                setTimeout(computerChoice, 200);
                
            }

        });
    });
}
gamePlay();