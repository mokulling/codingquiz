var time = document.getElementById('time')
var question = document.getElementById('question')
var highscore = document.getElementById('highscore')
var start = document.getElementById('start')
var para = document.createElement('p')
var timerp = document.getElementById('time')
var btncreate = document.createElement('button')
var count = 180
var correctans = 0
var ans = ''
var currentq = document.getElementById('currentq')

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

    var p = question.appendChild(currentq).setAttribute('id', 'q1')
    //selects question p tag
    var q1= document.getElementById('q1')
    //adds question
    q1.innerText = 'This is question one'
    //creates button for next question
    //for loop iterating each answer and creating a button
    for (let i = 0; i < answers1.length; i++) {
        var ans = document.createElement('button')
        ans.setAttribute('id', answerids[i]);
        ans.textContent = answers1[i];
        question.appendChild(ans)
        ans.addEventListener('click', function () {
            console.log(answerids[i])
            if (correct == answerids[i]){
                question.appendChild(yesno)
                yesno.innerText='correct'
                //alert('right!')
                correctans++
                console.log(correctans)
            } else {
                //alert('wrong!')
                question.appendChild(yesno)
                yesno.innerText='incorrect'

            }
        }
        
        )
    }
    nextQ()
}
    //b1.addEventListener('click', questionTwo)
    




    


function questionTwo () {
    
    console.log('this worked')
    var answers2= ['This is q 2', 'this is q2', 'this is 2', 'so is 2']
    var answerids2 = ['A', 'B', 'C', 'D']
    var correct = answerids2[2]
    //appends p tag
    var p2 = question.appendChild(currentq).setAttribute('id', 'q2')
    //selects question p tag
    var q2= document.getElementById('q2')
    //adds question
    q2.innerText = 'This is question one'
    //creates button for next question
    //for loop iterating each answer and creating a button
    for (let i = 0; i < answers2.length; i++) {
        var ans2 = document.createElement('button')
        ans2.setAttribute('id', answerids2[i]);
        ans2.textContent = answers2[i];
        question.appendChild(ans2)
        ans2.addEventListener('click', function () {
            console.log(answerids2[i])
            if (correct == answerids2[i]){
                question.appendChild(yesno)
                yesno.innerText='correct'
                //alert('right!')
                correctans++
                console.log(correctans)
            } else {
                //alert('wrong!')
                question.appendChild(yesno)
                yesno.innerText='incorrect'

            }
        }
        
        )
    }
    nextQ()

    //q1.innerText="this is question two"
    
}

function nextQ () {
    var nextbtn = document.getElementById('nextbtn')
    nextbtn.appendChild(btncreate).setAttribute('id', 'b1')
    var b1=document.getElementById('b1')
    b1.innerText='Next'
    nextbtn.addEventListener('click', questionTwo)

}
   