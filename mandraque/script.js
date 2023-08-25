const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next-button');
const feedbackElement = document.getElementById('feedback');

const allQuestions = [
    {
        question: 'Qual é a unidade básica de estrutura dos seres vivos?',
        options: ['Célula', 'Átomo', 'Gene', 'Molécula'],
        correctAnswer: 'Célula'
    },
    {
        question: 'Qual é o metal mais abundante na crosta terrestre?',
        options: ['Ferro', 'Alumínio', 'Cobre', 'Ouro'],
        correctAnswer: 'Alumínio'
    },
    {
        question: 'Em qual continente está localizado o Egito?',
        options: ['África', 'Ásia', 'Europa', 'América do Sul'],
        correctAnswer: 'África'
    },
    {
        question: 'Qual é o nome do processo pelo qual as plantas perdem água pela superfície das folhas?',
        options: ['Evaporação', 'Transpiração', 'Condensação', 'Infiltração'],
        correctAnswer: 'Transpiração'
    },
    {
        question: 'Qual é a camada atmosférica responsável por filtrar a maior parte dos raios ultravioleta do Sol?',
        options: ['Troposfera', 'Estratosfera', 'Mesosfera', 'Termosfera'],
        correctAnswer: 'Estratosfera'
    },
    {
        question: 'Qual é o símbolo químico do carbono?',
        options: ['C', 'Ca', 'Co', 'Cr'],
        correctAnswer: 'C'
    },
    {
        question: 'Quem foi o primeiro ser humano a viajar para o espaço?',
        options: ['Neil Armstrong', 'Yuri Gagarin', 'Buzz Aldrin', 'Alan Shepard'],
        correctAnswer: 'Yuri Gagarin'
    },
    {
        question: 'Qual é o processo pelo qual os organismos vivos obtêm energia dos alimentos?',
        options: ['Fotossíntese', 'Respiração', 'Fermentação', 'Digestão'],
        correctAnswer: 'Respiração'
    },
    {
        question: 'Qual é o maior órgão sensorial do corpo humano?',
        options: ['Olfato', 'Visão', 'Paladar', 'Audição'],
        correctAnswer: 'Visão'
    },
    {
        question: 'Qual é o autor de "Crime e Castigo"?',
        options: ['Fyodor Dostoevsky', 'Leo Tolstoy', 'Anton Chekhov', 'Ivan Turgenev'],
        correctAnswer: 'Fyodor Dostoevsky'
    },
    {
        question: 'Qual é o processo pelo qual a energia térmica é transferida pelo movimento de partículas?',
        options: ['Condução', 'Convecção', 'Irradiação', 'Ebulição'],
        correctAnswer: 'Condução'
    },
    {
        question: 'Qual é o símbolo químico do oxigênio?',
        options: ['O', 'Ox', 'Oxg', 'Oi'],
        correctAnswer: 'O'
    },
    {
        question: 'Qual é o osso mais longo do corpo humano?',
        options: ['Fêmur', 'Tíbia', 'Fíbula', 'Úmero'],
        correctAnswer: 'Fêmur'
    },
    {
        question: 'Qual é o gás mais abundante na atmosfera terrestre?',
        options: ['Oxigênio', 'Nitrogênio', 'Dióxido de carbono', 'Argônio'],
        correctAnswer: 'Nitrogênio'
    },
    {
        question: 'Qual é o nome do processo que converte açúcares em álcool?',
        options: ['Fermentação', 'Destilação', 'Oxidação', 'Reação nuclear'],
        correctAnswer: 'Fermentação'
    },
    {
        question: 'Qual é o maior lago de água doce do mundo em volume?',
        options: ['Lago Vitória', 'Lago Baikal', 'Lago Niassa', 'Lago Titicaca'],
        correctAnswer: 'Lago Baikal'
    },
    {
        question: 'Qual é o maior organismo vivo conhecido?',
        options: ['Elefante africano', 'Baleia-azul', 'Sequoia gigante', 'Fungo Armillaria ostoyae'],
        correctAnswer: 'Fungo Armillaria ostoyae'
    },
    {
        question: 'Qual é o nome do processo pelo qual as plantas produzem alimentos usando energia solar?',
        options: ['Fotossíntese', 'Respiração', 'Fermentação', 'Digestão'],
        correctAnswer: 'Fotossíntese'
    },
    {
        question: 'Em que ano foi lançado o primeiro iPhone?',
        options: ['2005', '2007', '2010', '2012'],
        correctAnswer: '2007'
    },

    {
        question: 'Qual é a capital do Brasil?',
        options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
        correctAnswer: 'Brasília'
    },
    {
        question: 'Qual é o maior planeta do Sistema Solar?',
        options: ['Terra', 'Vênus', 'Marte', 'Júpiter'],
        correctAnswer: 'Júpiter'
    },
        {
            question: 'Qual é a capital do Brasil?',
            options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
            correctAnswer: 'Brasília'
        },
        {
            question: 'Qual é o maior planeta do Sistema Solar?',
            options: ['Terra', 'Vênus', 'Marte', 'Júpiter'],
            correctAnswer: 'Júpiter'
        },
        {
            question: 'Qual é o menor estado do Brasil em área territorial?',
            options: ['São Paulo', 'Alagoas', 'Sergipe', 'Rio de Janeiro'],
            correctAnswer: 'Sergipe'
        },
        {
            question: 'Quem escreveu a peça "Romeu e Julieta"?',
            options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Mark Twain'],
            correctAnswer: 'William Shakespeare'
        },
        {
            question: 'Em que ano ocorreu a Revolução Francesa?',
            options: ['1776', '1789', '1812', '1830'],
            correctAnswer: '1789'
        },
        {
            question: 'Qual é o maior osso do corpo humano?',
            options: ['Fêmur', 'Tíbia', 'Úmero', 'Costela'],
            correctAnswer: 'Fêmur'
        },
        {
            question: 'Qual é o elemento químico mais abundante no universo?',
            options: ['Hidrogênio', 'Oxigênio', 'Carbono', 'Nitrogênio'],
            correctAnswer: 'Hidrogênio'
        },
        {
            question: 'Quem pintou a Mona Lisa?',
            options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
            correctAnswer: 'Leonardo da Vinci'
        },
        {
            question: 'Qual é a montanha mais alta do mundo?',
            options: ['Monte Kilimanjaro', 'Monte Everest', 'Monte McKinley', 'Monte Fuji'],
            correctAnswer: 'Monte Everest'
        },
        {
            question: 'Qual é o maior animal terrestre?',
            options: ['Elefante africano', 'Rinoceronte branco', 'Girafa', 'Hipopótamo'],
            correctAnswer: 'Elefante africano'
        },
        {
            question: 'Em que ano foi fundada a Microsoft?',
            options: ['1975', '1981', '1985', '1990'],
            correctAnswer: '1975'
        },
        {
            question: 'Qual é a segunda maior cidade dos Estados Unidos?',
            options: ['Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
            correctAnswer: 'Los Angeles'
        },
        {
            question: 'Qual é o maior deserto do mundo?',
            options: ['Deserto de Gobi', 'Deserto de Atacama', 'Deserto do Saara', 'Deserto da Antártica'],
            correctAnswer: 'Deserto do Saara'
        },
        {
            question: 'Quem foi o primeiro presidente dos Estados Unidos?',
            options: ['George Washington', 'Thomas Jefferson', 'John Adams', 'Benjamin Franklin'],
            correctAnswer: 'George Washington'
        },
        {
            question: 'Qual é o número atômico do hidrogênio?',
            options: ['1', '2', '3', '4'],
            correctAnswer: '1'
        },
        {
            question: 'Qual é o autor de "Dom Quixote"?',
            options: ['Fernando Pessoa', 'Miguel de Cervantes', 'García Márquez', 'Jorge Luis Borges'],
            correctAnswer: 'Miguel de Cervantes'
        },
        {
            question: 'Qual é o nome do processo pelo qual as plantas convertem luz solar em energia?',
            options: ['Fotossíntese', 'Respiração', 'Fermentação', 'Digestão'],
            correctAnswer: 'Fotossíntese'
        },
        {
            question: 'Em que ano a Primeira Guerra Mundial terminou?',
            options: ['1917', '1918', '1919', '1920'],
            correctAnswer: '1918'
        },
        {
            question: 'Qual é o símbolo químico do ouro?',
            options: ['O', 'Ag', 'Au', 'Pb'],
            correctAnswer: 'Au'
        },
            {
                question: 'Qual é o país com a maior área territorial do mundo?',
                options: ['Rússia', 'Canadá', 'China', 'Estados Unidos'],
                correctAnswer: 'Rússia'
            },
            {
                question: 'Qual é o autor de "1984"?',
                options: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'Kurt Vonnegut'],
                correctAnswer: 'George Orwell'
            },
            {
                question: 'Quem escreveu "O Pequeno Príncipe"?',
                options: ['Antoine de Saint-Exupéry', 'Victor Hugo', 'Jules Verne', 'Gustave Flaubert'],
                correctAnswer: 'Antoine de Saint-Exupéry'
            },
            {
                question: 'Quantos elementos químicos compõem a tabela periódica?',
                options: ['92', '104', '118', '120'],
                correctAnswer: '118'
            },
            {
                question: 'Em que ano ocorreu a queda do Muro de Berlim?',
                options: ['1985', '1989', '1991', '1993'],
                correctAnswer: '1989'
            },
            {
                question: 'Qual é o maior órgão do corpo humano?',
                options: ['Coração', 'Fígado', 'Cérebro', 'Pele'],
                correctAnswer: 'Pele'
            },
            {
                question: 'Qual é o processo natural pelo qual a água é absorvida pelo solo?',
                options: ['Evaporação', 'Condensação', 'Precipitação', 'Infiltração'],
                correctAnswer: 'Infiltração'
            },
            {
                question: 'Qual é o autor da obra "A Odisséia"?',
                options: ['Homero', 'Sófocles', 'Eurípides', 'Aristófanes'],
                correctAnswer: 'Homero'
            },
            {
                question: 'Em qual ano o homem pisou na Lua pela primeira vez?',
                options: ['1964', '1969', '1973', '1977'],
                correctAnswer: '1969'
            },
            {
                question: 'Qual é o maior mamífero marinho?',
                options: ['Baleia-azul', 'Orca', 'Tubarão-baleia', 'Golfinho'],
                correctAnswer: 'Baleia-azul'
            },
            {
                question: 'Qual é o processo pelo qual as plantas convertem energia luminosa em energia química?',
                options: ['Fotossíntese', 'Respiração', 'Fermentação', 'Digestão'],
                correctAnswer: 'Fotossíntese'
            },
            {
                question: 'Qual é o nome da corrente marítima quente que flui ao longo da costa leste dos Estados Unidos?',
                options: ['Golfo do México', 'Corrente de Humboldt', 'Corrente do Golfo', 'Corrente de Benguela'],
                correctAnswer: 'Corrente do Golfo'
            },
            {
                question: 'Quem escreveu "O Processo"?',
                options: ['Franz Kafka', 'Fyodor Dostoevsky', 'Leo Tolstoy', 'Anton Chekhov'],
                correctAnswer: 'Franz Kafka'
            },
            {
                question: 'Qual é o maior órgão interno do corpo humano?',
                options: ['Coração', 'Cérebro', 'Fígado', 'Estômago'],
                correctAnswer: 'Fígado'
            },
            {
                question: 'Qual é o país com o maior número de ilhas?',
                options: ['Filipinas', 'Indonésia', 'Japão', 'Maldivas'],
                correctAnswer: 'Indonésia'
            },
            {
                question: 'Quem pintou "A Noite Estrelada"?',
                options: ['Claude Monet', 'Pablo Picasso', 'Vincent van Gogh', 'Edvard Munch'],
                correctAnswer: 'Vincent van Gogh'
            },
            {
                question: 'Qual é o elemento químico com o símbolo "Fe"?',
                options: ['Ferro', 'Fósforo', 'Flúor', 'Frâncio'],
                correctAnswer: 'Ferro'
            },
            {
                question: 'Quem escreveu a peça "Hamlet"?',
                options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Mark Twain'],
                correctAnswer: 'William Shakespeare'
            },
            {
                question: 'Qual é o ácido presente no suco gástrico?',
                options: ['Ácido sulfúrico', 'Ácido cítrico', 'Ácido clorídrico', 'Ácido acético'],
                correctAnswer: 'Ácido clorídrico'
            }
        ];


let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 300;

function displayQuestion() {
    if (currentQuestionIndex >= allQuestions.length) {
        clearInterval(timerInterval);
        questionElement.textContent = 'Quiz concluído! Sua pontuação final: ' + score + ' pontos.';
        optionsElement.innerHTML = '';
        nextButton.disabled = true;
        feedbackElement.textContent = '';
        return;
    }

    const currentQuestion = allQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionLabel = document.createElement('label');
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = 'answer';
        optionInput.value = option;
        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option));
        optionsElement.appendChild(optionLabel);
    });

    feedbackElement.textContent = ''; // Limpa o feedback anterior
    nextButton.disabled = false;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return;

    const currentQuestion = allQuestions[currentQuestionIndex];
    if (selectedOption.value === currentQuestion.correctAnswer) {
        score++;
        scoreElement.textContent = score;
        feedbackElement.textContent = 'Resposta correta!';
        feedbackElement.classList.remove('feedback-incorrect');
        feedbackElement.classList.add('feedback-correct');
    } else {
        feedbackElement.textContent = 'Resposta incorreta. A resposta correta era: ' + currentQuestion.correctAnswer;
        feedbackElement.classList.remove('feedback-correct');
        feedbackElement.classList.add('feedback-incorrect');
    }

    currentQuestionIndex++;
    nextButton.disabled = true; // Desabilita o botão até que a próxima pergunta seja exibida
}

function updateTimer() {
    timerElement.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        questionElement.textContent = 'Tempo esgotado!';
        optionsElement.innerHTML = '';
        nextButton.disabled = true;
    }
}

nextButton.addEventListener('click', () => {
    checkAnswer();
    displayQuestion();
});

displayQuestion();
const timerInterval = setInterval(updateTimer, 1000);
