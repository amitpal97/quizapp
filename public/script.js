const quizDB = [
    {
        question: "Q1:what is full form of html?",
        a: "hello to my land",
        b:"hey text markup languge",
        c:"hyper text makup language",
        d:"hyper text markup language",
        ans:"ans4"
    },
    {
        question:"what is full form of css?",
        a:"cascardinfg style samne.",
        b:"casblkl same sheet",
        c:"cascarding style sheet",
        d:"cascarding steme sheet",
        ans:"ans3"
    },
    {
        question:"what is full form nic?",
        a:"network intra co",
        b:"network intrface card",
        c:"network introduce card",
        d:"net intire card",
        ans:"ans2"

    },
    {
        question:"what is full form of ip?",
        a:"internet protocol",
        b:"internet prpprotocol",
        c:"internet pritacol",
        d:"inrire procol",
        ans:"ans1"


    }
];
const question = document.querySelector('.question');
const option1  = document.querySelector('#option1');
const option2  = document.querySelector('#option2');
const option3  = document.querySelector('#option3');
const option4  = document.querySelector('#option4');
const submit   = document.querySelector('#submit');
    
const answers  = document.querySelectorAll('.answer');
const showScore =document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
    const loadQuestion = () =>{

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;


}
loadQuestion();

const getCheckAnswer = ()=>{
    let answer;
    
    

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer=curAnsElem.id;

        }
        
    });
    return answer;
};
const deselectAll =()=>{
    answers.forEach((curAnsElem) =>curAnsElem.checked=false );

}

submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer==quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if (questionCount<quizDB.length) {
        loadQuestion();
         }else{
                showScore.innerHTML=`
                <h3> Your score ${score}/${quizDB.length} </h3>
                <button class="btn"onclick="location.reload()">play again</button>
                `;
                showScore.classList.remove('scoreArea'); 
         }

});