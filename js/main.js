const elements1to20 = [
    {
        name: 'Hydrogen',
        symbol: 'H',
    },
    {
        name: 'Helium',
        symbol: 'He',
    },
    {
        name: 'Lithium',
        symbol: 'Li',
    },
    {
        name: 'Beryllium',
        symbol: 'Be',
    },
    {
        name: 'Boron',
        symbol: 'B',
    },
    {
        name: 'Carbon',
        symbol: 'C',
    },
    {
        name: 'Nitrogen',
        symbol: 'N',
    },
    {
        name: 'Oxygen',
        symbol: 'O',
    },
    {
        name: 'Fluorine',
        symbol: 'F',
    },
    {
        name: 'Neon',
        symbol: 'Ne',
    },
    {
        name: 'Sodium',
        symbol: 'Na',
    },
    {
        name: 'Magnesium',
        symbol: 'Mg',
    },
    {
        name: 'Aluminum',
        symbol: 'Al',
    },
    {
        name: 'Silicon',
        symbol: 'Si',
    },
    {
        name: 'Phosphorus',
        symbol: 'P',
    },
    {
        name: 'Sulfur',
        symbol: 'S',
    },
    {
        name: 'Chlorine',
        symbol: 'Cl',
    },
    {
        name: 'Argon',
        symbol: 'Ar',
    },
    {
        name: 'Potassium',
        symbol: 'K',
    },
    {
        name: 'Calcium',
        symbol: 'Ca',
    },
];

const diatoms = [
    {
        name: 'Bromine',
        symbol: 'Br',
    },
    {
        name: 'Iodine',
        symbol: 'I',
    },
    {
        name: 'Nitrogen',
        symbol: 'N',
    },
    {
        name: 'Chlorine',
        symbol: 'Cl',
    },
    {
        name: 'Hydrogen',
        symbol: 'H',
    },
    {
        name: 'Oxygen',
        symbol: 'O',
    },
    {
        name: 'Fluorine',
        symbol: 'F',
    },
];

const importantElements = [
    {
        name: 'Tin',
        symbol: 'Sn',
    },
    {
        name: 'Lead',
        symbol: 'Pb',
    },
    {
        name: 'Copper',
        symbol: 'Cu',
    },
    {
        name: 'Silver',
        symbol: 'Ag',
    },
    {
        name: 'Gold',
        symbol: 'Au',
    },
    {
        name: 'Iron',
        symbol: 'Fe',
    },
    {
        name: 'Potassium',
        symbol: 'K',
    },
    {
        name: 'Mercury',
        symbol: 'Hg',
    },
    {
        name: 'Antimony',
        symbol: 'Sb',
    },
    {
        name: 'Sodium',
        symbol: 'Na',
    },
    {
        name: 'Tungsten',
        symbol: 'W',
    },
    {
        name: 'Manganese',
        symbol: 'Mn',
    },
];

const SETUP = document.querySelector('.setup-screen');
const ACTIVE = document.querySelector('.active-screen');
const Q = document.querySelector('.question-number');

const listSelect = document.querySelector('.select-list');
const modeSelect = document.querySelector('.select-mode');

let list;
let mode;

let questionList;
let totalQuestions;

document.querySelector('.btn-start').addEventListener('click', () => {
    SETUP.style.display = 'none';
    list = listSelect.value;
    mode = modeSelect.value;
    switch (list) {
        case 'elements1to20':
            questionList = randomListOrder(elements1to20);
            break;
        
        case 'diatoms':
            questionList = randomListOrder(diatoms);
            break;

        case 'importantElements':
            questionList = randomListOrder(importantElements);
            break;
    };

    ACTIVE.style.display = 'block';
    totalQuestions = questionList.length;
    Q.innerHTML = `Question 1/${totalQuestions}`;
    Q.style.display = 'block';
    nextQuestion(list);
});

const questionBox = document.querySelector('.question');
const hightlightBox = document.querySelector('.highlight');
let currentAnswer;

function nextQuestion() {
    if (questionList.length === 0) {
        alert('Congratulations! You finished this practice set.');
        location.reload();
        return;
    }

    let idx = randomNumber(0, (questionList.length - 1));

    if (list === 'elements1to20') {
        let questionType = randomNumber(0, 1);
        switch (questionType) {
            case 0:
                questionBox.innerHTML = 'What is the atomic symbol for';
                hightlightBox.innerHTML = questionList[idx].name;
                currentAnswer = questionList[idx].symbol;
                questionList.splice(idx, 1);
                break;
            
            case 1:
                questionBox.innerHTML = 'Which element has the atomic symbol';
                hightlightBox.innerHTML = questionList[idx].symbol;
                currentAnswer = questionList[idx].name;
                questionList.splice(idx, 1);
                break;
        };
    } else if (list === 'diatoms') {
        questionBox.innerHTML = 'What is the atomic symbol for';
        hightlightBox.innerHTML = questionList[idx].name;
        currentAnswer = questionList[idx].symbol;
        questionList.splice(idx, 1);
    } else {
        let questionType = randomNumber(0, 1);
        switch (questionType) {
            case 0:
                questionBox.innerHTML = 'What is the atomic symbol for';
                hightlightBox.innerHTML = questionList[idx].name;
                currentAnswer = questionList[idx].symbol;
                questionList.splice(idx, 1);
                break;
            
            case 1:
                questionBox.innerHTML = 'Which element has the atomic symbol';
                hightlightBox.innerHTML = questionList[idx].symbol;
                currentAnswer = questionList[idx].name;
                questionList.splice(idx, 1);
                break;
        };
    }
};

const answerInput = document.querySelector('.input-answer');
let questionCorrect = false;
let questionNum = 1;

const CHECK = document.querySelector('.check-wrapper');
const checkInfo = document.querySelector('.check-info');

let answerSubmitted = false;

document.querySelector('.btn-submit').addEventListener('click', () => {
    if (answerSubmitted && questionCorrect) {
        answerInput.value = '';
        questionNum = questionNum + 1;
        Q.innerHTML = `Question ${questionNum}/${totalQuestions}`;
        answerSubmitted = false;
        questionCorrect = false;
        document.querySelector('.btn-submit').innerHTML = 'Continue';
        answerInput.style.backgroundColor = 'white';
        CHECK.style.display = 'none';
        nextQuestion();
        return;
    }

    let userAnswer = answerInput.value;
    answerSubmitted = true;
    if (userAnswer === currentAnswer) {
        questionCorrect = true;
        answerInput.style.backgroundColor = 'lime';
        CHECK.style.display = 'block';
        checkInfo.innerHTML = 'Correct!';
        document.querySelector('.btn-submit').innerHTML = 'Continue';
    } else if (userAnswer !== currentAnswer && userAnswer === currentAnswer.toLowerCase()) {
        answerInput.style.backgroundColor = 'red';
        CHECK.style.display = 'block';
        checkInfo.innerHTML = 'Check your capitalization!';
    } else {
        answerInput.style.backgroundColor = 'red';
        CHECK.style.display = 'block';
        checkInfo.innerHTML = 'Incorrect';
    }
});

function randomListOrder(list) {
    let copyList = list;
    let randomizedList = [];
    while (copyList.length !== 0) {
        let idx = randomNumber(0, (copyList.length - 1));
        randomizedList.push(copyList[idx]);
        copyList.splice(idx, 1);
    };
    return randomizedList;
};

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};