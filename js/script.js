const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz-box");
const timeCount = quiz_box.querySelector(".timer .timer-sec"); 
const timeLine = quiz_box.querySelector("header .timer-line   "); 

  
const option_list = document.querySelector(".option-list");

//If Start Quiz Button Clicked

start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}



//If Exit Quiz Button Clicked

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

//If Continue btn is clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let que_count = 0;
let que_numb = 1;
let counter = 0;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next-btn");
const result_box = document.querySelector(".result-box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit"); 
//If Next Button is clicked

next_btn.onclick = () => {
    if (que_count < questions.length) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);  
        clearInterval(counterLine);
        startTimerLine(widthValue); 
        next_btn.style.display = "none";
    } else {
        console.log("You've completed the quiz");
        showResultBox();
    }

    showQuestions(que_count);
}

function showQuestions(index) {
    const que_text = document.querySelector(".que-text");

    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + ' <span></span></div>'
        + '<div class="option">' + questions[index].options[1] + ' <span></span></div>'
        + '<div class="option">' + questions[index].options[2] + ' <span></span></div>'
        + '<div class="option"> ' + questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    } 
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = ' <div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    
    if (userAns.trim() == correctAns) {
        userScore += 1;
        answer.classList.add("correct");
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //select correct answer if the wrong one was picked
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }    


    //if user selects a disabled option
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}

function startTimer(time){
    counter = setInterval(timer,1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = '0' +  addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
        }
    } 
}

function showResultBox(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoretext = result_box.querySelector(".score-text");
    if(userScore > 30 ){
        let scoreTag = ' <span>and congrats,You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p> </span>';
        scoretext.innerHTML = scoreTag; 
    } else if(userScore > 20 ){
        let scoreTag = ' <span>and nice,You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p> </span>';
        scoretext.innerHTML = scoreTag; 
    } else{
        
            let scoreTag = ' <span>and sorry,You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p> </span>';
            scoretext.innerHTML = scoreTag; 
         
    }
 }
 
function startTimerLine(time){
    counterLine = setInterval(timer,29);
    function timer(){
        time +=1;
        timeLine.style.width = time + "px";
        if(time > 549){
              
        }
    }
}
  


function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total-que");
    let totalQuesCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}