$(document).ready(function () {
    randomSessors();
})

function randomSessors() {

    var randomPercentage, newMargin;
    for (var i = 0; i < document.getElementsByClassName("sessor").length; i++) {
        randomPercentage = Math.floor(Math.random() * (80 + 80) -80);
        newMargin = randomPercentage +"%";
        document.getElementsByClassName("sessor")[i].style.marginLeft = newMargin;
       // console.log(document.getElementsByClassName("sessor")[i].style.marginLeft);
    }
}