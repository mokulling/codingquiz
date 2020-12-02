var time = document.getElementById('time')
var question = document.getElementById('question')
var highscore = document.getElementById('highscore')
var start = document.getElementById('start')
var time = document.createElement('p')
var count = 180

//timer function
function timerButton() {
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
    
}
//add event listener on click to start button
function startBtn () {
    start.addEventListener('click', container )
}

function startQuiz () {
    console.log('test')
}

function container (){
    startQuiz();
    timerButton();
}

startBtn()




