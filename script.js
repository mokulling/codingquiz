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
var yesno = document.getElementById('yesno')
var btnContainer = document.getElementById('btn-container')

//timer function
function timerButton() {
    var timer = setInterval(function() {
        count--;
        timerp.innerHTML = 'Time remaining: ' + count
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



function container (){
    timerButton();
    questionOne()
}

startBtn()




//first question function
function questionOne() {
    //defines answers
    var answers1= ['Javascript', 'Just sayin', 'juicy strawberries', 'jumping statues']
    var answerids = ['A', 'B', 'C', 'D']
    var correct = answerids[0]
    //appends p tag

    var p = question.appendChild(currentq).setAttribute('id', 'q1')
    //selects question p tag
    var q1= document.getElementById('q1')
    //adds question
    q1.innerText = 'What does JS stand for'
    //creates button for next question
    //for loop iterating each answer and creating a button
    for (let i = 0; i < answers1.length; i++) {
        var ans = document.createElement('button')
        ans.setAttribute('id', answerids[i]);
        ans.textContent = answers1[i];
        btnContainer.appendChild(ans)
        ans.addEventListener('click', function () {
            console.log(answerids[i])
            if (correct == answerids[i]){
                question.appendChild(yesno)
                yesno.innerText='correct'
                correctans++
            } else {
                question.appendChild(yesno)
                yesno.innerText='incorrect'
                count = count-5
                

            }
            // question.innerHTML = ''
            btnContainer.innerHTML = ''
            questionTwo()
   
        }
        
        )
    }
    // // yesno.innerText = ''

   
}
    //b1.addEventListener('click', questionTwo)
    
    function questionTwo() {
        //defines answers
        var answers1= ['hypertext markup language', 'how to make lemons', 'hoses to move losers', 'hypertext Master language']
        var answerids = ['A', 'B', 'C', 'D']
        var correct = answerids[0]
        //appends p tag
    
        // var p = question.appendChild(currentq).setAttribute('id', 'q2')
        //selects question p tag
        var q1= document.getElementById('q1')
        //adds question
        q1.innerText = 'What does HTML stand for'
        //creates button for next question
        //for loop iterating each answer and creating a button
        for (let i = 0; i < answers1.length; i++) {
            var ans = document.createElement('button')
            ans.setAttribute('id', answerids[i]);
            ans.textContent = answers1[i];
            btnContainer.appendChild(ans)
            ans.addEventListener('click', function () {
                console.log(answerids[i])
                if (correct == answerids[i]){
                    question.appendChild(yesno)
                    yesno.innerText='correct'
                    correctans++
                } else {
                    question.appendChild(yesno)
                    yesno.innerText='incorrect'
                    count = count-5
    
                }
                btnContainer.innerHTML = ''
                questionThree()
            }
            
            )
        }
       
    }
    
    function questionThree() {
        //defines answers
        var answers1= ['Object', 'Array', 'variable', 'twister']
        var answerids = ['A', 'B', 'C', 'D']
        var correct = answerids[3]
        //appends p tag
    
        // var p = question.appendChild(currentq).setAttribute('id', 'q2')
        //selects question p tag
        var q1= document.getElementById('q1')
        //adds question
        q1.innerText = 'which is not a javascript term'
        //creates button for next question
        //for loop iterating each answer and creating a button
        for (let i = 0; i < answers1.length; i++) {
            var ans = document.createElement('button')
            ans.setAttribute('id', answerids[i]);
            ans.textContent = answers1[i];
            btnContainer.appendChild(ans)
            ans.addEventListener('click', function () {
                console.log(answerids[i])
                if (correct == answerids[i]){
                    question.appendChild(yesno)
                    yesno.innerText='correct'
                    correctans++
                } else {
                    question.appendChild(yesno)
                    yesno.innerText='incorrect'
                    count = count-5
    
                }
                btnContainer.innerHTML = ''
                questionFour()
            }
            
            )
        }
       
    }

        
    function questionFour() {
        //defines answers
        var answers1= ['Object', 'Array', 'variable', 'twister']
        var answerids = ['A', 'B', 'C', 'D']
        var correct = answerids[3]
        //appends p tag
    
        // var p = question.appendChild(currentq).setAttribute('id', 'q2')
        //selects question p tag
        var q1= document.getElementById('q1')
        //adds question
        q1.innerText = 'which is not a javascript term'
        //creates button for next question
        //for loop iterating each answer and creating a button
        for (let i = 0; i < answers1.length; i++) {
            var ans = document.createElement('button')
            ans.setAttribute('id', answerids[i]);
            ans.textContent = answers1[i];
            btnContainer.appendChild(ans)
            ans.addEventListener('click', function () {
                console.log(answerids[i])
                if (correct == answerids[i]){
                    question.appendChild(yesno)
                    yesno.innerText='correct'
                    correctans++
                } else {
                    question.appendChild(yesno)
                    yesno.innerText='incorrect'
                    count = count-5
    
                }
                btnContainer.innerHTML = ''
                highscorealert()
            }
            
            )
        }
    }
       





    



highscore.addEventListener('click', highscorealert)

function highscorealert () {
    var q1= document.getElementById('q1')

    q1.innerText = 'Here are the high scores'
    var highInput = document.createElement('input')
    var getInput = document.getElementsByName('input')

    q1.appendChild(highInput)
    highInput.addEventListener('input', scoreboard)
}


function scoreboard () {
    
    // console.log(getInput.value)
}