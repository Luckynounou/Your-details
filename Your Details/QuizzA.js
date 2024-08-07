document.addEventListener('DOMContentLoaded', () => {
    const quizData = 
    // بيانات الاختبار هنا
    [
        {
            question: "كم عمرك؟",
            a: "18---->25",
            b: "25---->35",
            c: "35---->50",
            d: "أكثر من 50",
            correct: "b"
        },
        {
            question: "ما هو نوع بشرتك؟",
            a: "دهنية",
            b: "جافة",
            c: "مختلطة",
            d: "حساسة",
            correct: "a"
        },
        {
            question: "كم مرة تتعرض للبثور؟",
            a: "كثيرًا",
            b: "أحيانًا",
            c: "نادراً",
            d: "أبداً",
            correct: "c"
        },
        {
            question: "كم مرة تقوم بتنظيف وجهك؟",
            a: "مرة في اليوم",
            b: "مرتين في اليوم",
            c: "أكثر من مرتين في اليوم",
            d: "أبداً",
            correct: "c"
        },
        {
            question: "كيف تشعر بشرتك بعد التنظيف؟",
            a: "مشدة وجافة",
            b: "طبيعية",
            c: "دهنية ولامعة",
            d: "حساسة ومتهيجة",
            correct: "d"
        },
        {
            question: "كيف تشعر تجاه المرطب؟",
            a: "لا أحبه. لقد حصلت على رد فعل على أي لوشن جربته في الماضي.",
            b: "إنه منقذ للحياة! بدونها، بشرتي تشعر بالشد والالتهاب.",
            c: "أستمتع باستخدام المرطب كجزء من روتيني اليومي.",
            d: "لا أطيقه. وجهي دهني بما فيه الكفاية!",
            correct: "d"
        },
        {
            question: "كيف هي مسامك؟",
            a: "تقريبًا غير مرئية!",
            b: "يمكنك نوعًا ما رؤيتها، لكن ليس حقًا.",
            c: "موسعة في بعض المناطق من وجهي.",
            d: "كبيرة. لا مشكلة في رؤيتها.",
            correct: "d"
        },
        {
            question: "ما مدى تعرض بشرتك للاحمرار؟",
            a: "تحمر عندما أعبث بها، لكنها عادة ما تكون بخير.",
            b: "تحمر إذا شعرت بالإحراج.",
            c: "عندما أصاب بالبثور، تضيء.",
            d: "دائمًا لدي درجة حمراء.",
            correct: "d"
        },
        {
            question: "هل لديك خطوط دقيقة أو تجاعيد حول شفتيك أو رقبتك؟",
            a: "نعم، كلاهما",
            b: "فقط حول شفتي.",
            c: "فقط حول رقبتي.",
            d: "لا.",
            correct: "d"
        },
        {
            question: "هل لديك خطوط دقيقة أو تجاعيد تحت عينيك أو على جبينك؟",
            a: "نعم، كلاهما",
            b: "فقط تحت عيني.",
            c: "فقط على جبيني.",
            d: "لا.",
            correct: "d"
        }
];
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const answersEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let answers = [];

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function handleAnswerClick() {
    const answer = getSelected();

    if (answer) {
        answers.push(answer);
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            const queryString = answers.map((answer, index) => `q${index}=${answer}`).join('&');
            window.location.href = `ResultA.html?${queryString}`;
        }
    }
}

answersEls.forEach(answerEl => {
    answerEl.addEventListener('click', handleAnswerClick);
});

loadQuiz();
});