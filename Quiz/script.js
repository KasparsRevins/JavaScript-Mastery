const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const scoreContainer = document.getElementById('score-container');
const questions = [
    {
        question: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        answer: 'Paris',
        marks: 5
    },
    {
        question: 'In which country is Stonehenge in?',
        options: ['Norway', 'Germany', 'Wales', 'United Kingdom'],
        answer: 'United Kingdom',
        marks: 5
    }
    ,
    {
        question: 'In which country is Bucharest in?',
        options: ['Bulgaria', 'Romania', 'Turkey', 'Moldova'],
        answer: 'Romania',
        marks: 5
    },
    {
        question: 'What language is spoken in Brazil?',
        options: ['Brazilian', 'Spanish', 'Portuguese', 'English'],
        answer: 'Portuguese',
        marks: 5
    },
    {
        question: 'In which country is the Colosseum located in?',
        options: ['Italy', 'France', 'Spain', 'Malta'],
        answer: 'Italy',
        marks: 5
    }
    
  
];

function displayQuestions() {
    questions.forEach((questionObj, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${questionObj.question} (${questionObj.marks} marks)`;
        questionDiv.appendChild(questionText);

        questionObj.options.forEach((option) => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;
            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));
            questionDiv.appendChild(optionLabel);
        });

        quizContainer.appendChild(questionDiv);
    });
}

submitButton.addEventListener('click', () => {
    let score = 0;
    questions.forEach((questionObj, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === questionObj.answer) {
            score += questionObj.marks;
        }
    });

    scoreContainer.innerHTML = `Your total score is: ${score} out of ${questions.length * 5}`;
});

displayQuestions();
