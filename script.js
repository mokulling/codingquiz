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
        //console.log(count);
        count--;
        timerp.innerHTML = count
        if(count===0){
            stopInterval()
        }
    }, 1000);
    
    var stopInterval = function() {
        alert('time\'s up!');
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




//first question function
function questionOne() {
    //defines answers
    var answers1= ['This is an answer', 'this is also an answer', 'this is too', 'so is this']
    var answerids = ['A', 'B', 'C', 'D']
    var correct = answerids[1]
    //appends p tag

    var p = question.appendChild(time).setAttribute('id', 'q1')
    //selects question p tag
    var q1= document.getElementById('q1')
    //adds question
    q1.innerText = 'This is question one'
    //creates button for next question
    q1.appendChild(btncreate).setAttribute('id', 'b1')
    var b1=document.getElementById('b1')
    b1.innerText='next'
    //for loop iterating each answer and creating a button
    for (let i = 0; i < answers1.length; i++) {
        var ans = document.createElement('button')
        ans.setAttribute('id', answerids[i]);
        ans.textContent = answers1[i];
        question.appendChild(ans)
        ans.addEventListener('click', function () {
            console.log(answerids[i])
            if (correct == answerids[i]){
                alert('right!')
            } else {
                alert('wrong!')
            }
        }
        
        )
    }
    }
    //b1.addEventListener('click', questionTwo)
    




   
    


function questionTwo () {
    console.log('this worked')
    q1.innerText="this is question two"
    
}