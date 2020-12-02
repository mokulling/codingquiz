var time = document.getElementById('time')
var question = document.getElementById('question')
var highscore = document.getElementById('highscore')
var start = document.getElementById('start')
var time = document.createElement('p')
var count = 15
var timer = setInterval(function() {
    console.log(count);
    count--;
    if(count===0){
        stopInterval()
    }
}, 1000);

var stopInterval = function() {
    console.log('time\'s up!');
    clearInterval(timer);
}




startButton()

function startButton() {

}