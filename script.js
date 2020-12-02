var time = document.getElementById('time')
var question = document.getElementById('question')
var highscore = document.getElementById('highscore')
var start = document.getElementById('start')
var time = document.createElement('p')
var timerp = document.getElementById('time')
var btncreate = document.createElement('button')
var count = 180
var currentq = ''

//timer function
function timerButton() {
    var timer = setInterval(function() {
        console.log(count);
        count--;
        timerp.innerHTML = count
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
    questionOne()
}

startBtn()



function questionOne() {
    //appends p tag
    var p = question.appendChild(time).setAttribute('id', 'q1')
    var q1= document.getElementById('q1')
    q1.innerText = 'This is question one'
    q1.appendChild(btncreate).setAttribute('id', 'b1')
    var b1=document.getElementById('b1')
    b1.innerText='next'
    b1.addEventListener('click', questionTwo)
    

}

//questionOne();
function questionTwo () {
    console.log('this worked')
    q1.innerText="this is question two"
    
}