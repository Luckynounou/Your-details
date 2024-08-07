const quizData = 
    // Your quiz data here
    [


        {
            question: "How Old are you?",
            a: "18---->25",
            b: "25---->35",
            c: "35---->50",
            d: "50 above",
            correct: "b"
        },
        {
            question: "What is your skin type?",
            a: "Oily",
            b: "Dry",
            c: "Combination",
            d: "Sensitive",
            correct: "a"
        },
       
        {
            question: "How often do you experience breakouts?",
            a: "Frequently",
            b: "Occasionally",
            c: "Rarely",
            d: "Never",
            correct: "c"
        },
        {
            question: "How often do you cleanse your face? ",
            a: "Once a day",
            b: "Twice a day",
            c: "More than twice a day ",
            d: "Never",
            correct: "c"
        },
        {
            question: "How does your skin feel after cleansing?",
            a: "Tight and dry",
            b: "Normal",
            c: "Oily and shiny",
            d: "Sensitive and irritated",
            correct: "d"
        },
        {
            question: "How do you feel about moisturizer? ",
            a: "I don't like it.i've had reaction to any lotion i've tried in te past.",
            b: "It's a lifesaver!Without it, my skin feels tight and inflamed.",
            c: "I enjoy using moisturizer as part of my daily routine .",
            d: "I can't stand it.My face is greasy enough!",
            correct: "d"
        },
        {
            question: "How are your pores? ",
            a: "Almost invisible!",
            b: "You can Kind of see them,but not really.",
            c: "Enlarged on some areas of my face.",
            d: "Big.No problem seeing them.",
            correct: "d"
        },
        {
            question: "How redness-prone is your skin?",
            a: "It gets red when i pick at it , but it's usually fine.",
            b: "It gets red if i'm embarrassed.",
            c: "When i have a breakout,it lights up.",
            d: "I always have a red tone.",
            correct: "d"
        },
        {
            question: "Do you have fine lines or ageing around your lips or neck?",
            a: "Yes,both",
            b: "Only around my lips. ",
            c: "Only around my neck.",
            d: "No.",
            correct: "d"
        },
        {
            question: "Do you have fine lines or ageing under your eyes or on your forhead?",
            a: "Yes,both",
            b: "Only under my eyes. ",
            c: "Only on my forhead.",
            d: "No.",
            correct: "d"
        }
    
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let answers = [];

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        answers.push(answer);
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            const queryString = answers.map((answer, index) => `q${index}=${answer}`).join('&');
            window.location.href = `Result.html?${queryString}`;
        }
    }
});
