// ================================================================
//  DATA
// ================================================================

const LEVELS = [{
    id: 1,
    name: 'Algebra',
    suggestion: `Further practice in algebra is strongly recommended. By acquiring proficiency in fundamental algebraic concepts, you will be better prepared to understand and master the advanced algebraic topics that are commonly introduced in higher education.`,
    questions: [{
        id: 'l1q1',
        text: `6 is subtracted from a number, then the result is multiplied by 6, and the answer is added with 6. After that, the answer is divided by 6, and then the final answer is 6. Find the number.`,
        options: ['10', '11', '12', '13'],
        correct: 1
    }, {
        id: 'l1q2',
        text: `In a science test, there are 15 questions in total. Richard got 21 marks in this test. How many right answers did he get in test? (2 marks for right answer and subtract 1 mark for wrong answer.) `,
        options: ['10', '11', '12', '13'],
        correct: 2
    }, {
        id: 'l1q3',
        text: `For one academic year, David got 73 marks as an average for the first 3 test. He tried very hard to get the average of 75 marks in his final exam. How many marks did he get to reach an average of 75 marks in his final exam?`,
        options: ['81 marks', '71 marks', '61 marks', '51 marks'],
        correct: 0
    }, {
        id: 'l1q4',
        text: `The ratio of boys to girls in a class is 6 : 7. If there are 156 students in the class, how many are boys?`,
        options: ['71', '82', '70', '72'],
        correct: 3
    }, {
        id: 'l1q5',
        text: `The three friends earn $2434 in total. John earns $500 more than Peter whose money is $250 more than Eric. How much does each friend earn?`,
        options: [
            'Eric = $478 <br> Peter = $728 <br> John = $1228',
            'Eric = $476 <br> Peter = $712 <br> John = $1224',
            'Eric = $467 <br> Peter = $782 <br> John = $1442',
            'Eric = $487 <br> Peter = $721 <br> John = $1242'
        ],
        correct: 0
    }]
}, {
    id: 2,
    name: 'Statistics & Probability',
    suggestion: `You are advised to engage in continuous practice of statistical and probability concepts. Such preparation will equip you with the necessary skills to interpret data accurately, evaluate risks, and confidently approach the increasingly sophisticated topics you may encounter in higher education.`,
    questions: [{
        id: 'l2q1',
        text: `In a bag of marbles, there are 15% more red marbles than blue marbles. If the bag contains only these two colors of marbles, then which of the following is a possible value for the total number of marbles in the bag?`,
        options: ['165', '245', '310', '430'],
        correct: 3
    }, {
        id: 'l2q2',
        text: `A school club has 3 freshmen, 2 sophomores, and 10 juniors as members. If a member is randomly selected to represent the club at an after-school function, what is the probability the selected member is a sophomore?`,
        options: ['1/15', '2/15', '3/15', '1/4'],
        correct: 1
    }, {
        id: 'l2q3',
        text: `Joe has kept track of how many new movies he has seen each year for the past 5 years. The greatest number of new movies he saw in these years was 20, while the median number of new movies he saw was 14. If the least number of new movies he saw in any of these years was 10, which of the following could be the average numbear of movies he has seen per year over the past 5 years?`,
        options: ['10', '12', '13', '14'],
        correct: 3
    }, {
        id: 'l2q4',
        text: `A data set consists of the number 1 n times and the number 3 one time. If n > 1, which of the following statement must be true about the mean and the median?`,
        options: [
            'The mean and the median will equal 1.',
            'The mean will be larger than 1, and the median will be equal to 1.',
            'The mean will equal 1, and the median will be larger than 1.',
            'The mean and the median will be larger than 1.'
        ],
        correct: 1
    }, {
        id: 'l2q5',
        text: `Angelique, a teacher, is making a reading list for her students. She wants to include one historical novel, one work of science fiction, one book of poetry, and one graphic novel. She has five of each type of book to choose from. How many possible combinations of books could she include in her reading list?`,
        options: ['125', '25', '625', '3025'],
        correct: 2
    }]
}, {
    id: 3,
    name: 'Advanced Math',
    suggestion: `Further exploration of advanced mathematical concepts is strongly recommended. By mastering topics such as functions, polynomials, graph interpretation, calculus, and trigonometry, you will be equipped with the essential knowledge and critical thinking skills required to tackle complex problems in higher education and related disciplines.`,
    questions: [{
        id: 'l3q1',
        text: `Which equation of a parabola has zeros at −1 and 2?`,
        options: [
            'y = (x − 1)(x + 2)',
            '(x + 1) = (x − 2)',
            '(x − 1) = (x + 2)',
            'y = (x + 1)(x − 2)'
        ],
        correct: 3
    }, {
        id: 'l3q2',
        text: `The function y = −16t² + 248 models the height y (in feet) of a stone t seconds after it is dropped from the edge of a vertical cliff. How long will it take to hit the ground? Round to the nearest hundredth of a second.`,
        options: ['0.25 seconds', '3.94 seconds', '5.57 seconds', '7.87 seconds'],
        correct: 1
    }, {
        id: 'l3q3',
        text: `The points (0, 5) and (8, 8) lie on the graph of a function k(x). If the points (−5, 5) and (3, 8) lie on the graph of k(x + m) + n, then what is the value of m + n?`,
        options: ['−5', '−3', '3', '5'],
        correct: 3
    }, {
        id: 'l3q4',
        text: `cos 32 = sin(5m − 12). <br> In the equation above, the angle measures are in degrees. If 0° < m < 90°, what is the value of m?`,
        options: ['11', '12', '14', '15'],
        correct: 2
    }, {
        id: 'l3q5',
        text: `Find the derivative of y = 3x² + 5x − 7.`,
        options: ['6x + 5', '6 − 5x', '6x + 1', '3x − 5'],
        correct: 0
    }]
}];

// ================================================================
//  STATE
// ================================================================

let state = {
    currentLevel: 0,
    selectedQuestions: [],
    answers: [],
    timer: 180,
    timerInterval: null,
    isFinished: false,
    levelResults: []
};

// ================================================================
//  DOM REFS
// ================================================================

const $ = id => document.getElementById(id);
const startScreen = $('startScreen');
const quizScreen = $('quizScreen');
const completeScreen = $('completeScreen');
const modal = $('suggestionModal');

const levelBadge = $('levelBadge');
const levelNum = $('levelNum');
const timerDisplay = $('timerDisplay');
const timerBox = $('timerBox');
const questionsContainer = $('questionsContainer');
const submitBtn = $('submitBtn');
const statusMsg = $('statusMsg');
const progressDots = document.querySelectorAll('.dot');
const dotLines = document.querySelectorAll('.dot-line');

const modalTitle = $('modalTitle');
const modalLevelLabel = $('modalLevelLabel');
const modalSuggestion = $('modalSuggestion');
const modalEndBtn = $('modalEndBtn');

const startBtn = $('startBtn');
const retryCompleteBtn = $('retryCompleteBtn');

// ================================================================
//  HELPERS
// ================================================================

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function pickRandom(arr, n) {
    const copy = [...arr];
    shuffleArray(copy);
    return copy.slice(0, n);
}

function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

// Animated screen swap
function showScreen(el) {
    el.classList.remove('hidden');
    el.classList.remove('screen-in');
    void el.offsetWidth; // restart animation
    el.classList.add('screen-in');
}
function hideScreen(el) {
    if (el.classList.contains('hidden')) return;
    el.classList.add('hidden');
    el.classList.remove('screen-in');
}

function flashStatus(text, color) {
    statusMsg.textContent = text;
    statusMsg.style.color = color || 'var(--brand-navy)';
    statusMsg.classList.remove('flash');
    void statusMsg.offsetWidth;
    statusMsg.classList.add('flash');
}

// Button click ripple
function attachRipple(btn) {
    btn.addEventListener('click', (e) => {
        const r = btn.getBoundingClientRect();
        const span = document.createElement('span');
        span.className = 'ripple';
        const size = Math.max(r.width, r.height);
        span.style.width = span.style.height = size + 'px';
        span.style.left = (e.clientX - r.left - size / 2) + 'px';
        span.style.top = (e.clientY - r.top - size / 2) + 'px';
        btn.appendChild(span);
        setTimeout(() => span.remove(), 650);
    });
}
document.querySelectorAll('.btn').forEach(attachRipple);

// ================================================================
//  RENDER
// ================================================================

function renderLevel() {
    const level = LEVELS[state.currentLevel];
    const qs = state.selectedQuestions;

    levelNum.textContent = level.id;
    timerDisplay.textContent = formatTime(state.timer);
    timerBox.classList.remove('warning');

    progressDots.forEach((dot, idx) => {
        dot.classList.remove('active', 'done', 'fail');
        if (idx === state.currentLevel) dot.classList.add('active');
        else if (idx < state.currentLevel) {
            const result = state.levelResults[idx];
            dot.classList.add(result === 'pass' ? 'done' : 'fail');
        }
    });
    dotLines.forEach((line, idx) => {
        line.classList.toggle('done', idx < state.currentLevel && state.levelResults[idx] === 'pass');
    });

    let html = '';
    qs.forEach((q, qi) => {
        const letter = String.fromCharCode(65 + qi);
        html += `
            <div class="question-card" data-qidx="${qi}">
                <div class="q-number">Question ${letter}</div>
                <div class="q-text">${q.text}</div>
                <div class="options">
                    ${q.options.map((opt, oi) => `
                        <label class="option-label">
                            <input type="radio" name="q${qi}" value="${oi}" />
                            <span class="letter">${String.fromCharCode(65 + oi)}.</span>
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });
    questionsContainer.innerHTML = html;

    state.answers = [null, null];
    statusMsg.textContent = '';

    document.querySelectorAll('.option-label').forEach((label) => {
        // ripple-style hover origin
        label.addEventListener('mousemove', (e) => {
            const r = label.getBoundingClientRect();
            label.style.setProperty('--rx', ((e.clientX - r.left) / r.width * 100) + '%');
            label.style.setProperty('--ry', ((e.clientY - r.top) / r.height * 100) + '%');
        });
    });

    document.querySelectorAll('.option-label input[type="radio"]').forEach((radio) => {
        radio.addEventListener('change', (e) => {
            const parent = e.target.closest('.question-card');
            const qidx = parseInt(parent.dataset.qidx);
            state.answers[qidx] = parseInt(e.target.value);
            const allAnswered = state.answers.every(a => a !== null);
            submitBtn.disabled = !allAnswered;
            if (allAnswered) {
                flashStatus('Both questions answered. Click Submit.', '#1d7a4a');
            } else {
                const remaining = state.answers.filter(a => a === null).length;
                flashStatus(`${remaining} question(s) remaining.`, '#1d5b82');
            }
        });
    });

    submitBtn.disabled = true;
    submitBtn.textContent = 'Submit Answers';
    flashStatus('Answer both questions to continue.', '#1d5b82');
}

function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(state.timer);
    if (state.timer <= 30) timerBox.classList.add('warning');
    else timerBox.classList.remove('warning');
}

// ================================================================
//  TIMER
// ================================================================

function startTimer() {
    clearInterval(state.timerInterval);
    state.timer = 180;
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
        state.timer -= 1;
        updateTimerDisplay();
        if (state.timer <= 0) {
            clearInterval(state.timerInterval);
            handleLevelFail('Time is up.');
        }
    }, 1000);
}
function stopTimer() { clearInterval(state.timerInterval); }

// ================================================================
//  LEVEL LOGIC
// ================================================================

function initLevel() {
    const level = LEVELS[state.currentLevel];
    state.selectedQuestions = pickRandom(level.questions, 2);
    state.answers = [null, null];
    renderLevel();
    startTimer();
    showScreen(quizScreen);
    hideScreen(startScreen);
    hideScreen(completeScreen);
    modal.classList.remove('open');
    submitBtn.disabled = true;
}

function handleLevelFail(reason) {
    if (state.isFinished) return;
    state.isFinished = true;
    stopTimer();

    const level = LEVELS[state.currentLevel];
    state.levelResults[state.currentLevel] = 'fail';

    modalTitle.textContent = `Keep Practicing — ${level.name}`;
    modalLevelLabel.textContent = `Level ${level.id} · ${level.name}`;
    modalSuggestion.textContent = level.suggestion;
    modal.classList.add('open');

    progressDots.forEach((dot, idx) => {
        if (idx === state.currentLevel) {
            dot.classList.remove('active');
            dot.classList.add('fail');
        }
    });
}

function handleLevelPass() {
    if (state.isFinished) return;
    state.levelResults[state.currentLevel] = 'pass';
    stopTimer();

    // flash all cards green
    document.querySelectorAll('.question-card').forEach(c => {
        c.classList.remove('correct-flash');
        void c.offsetWidth;
        c.classList.add('correct-flash');
    });

    progressDots.forEach((dot, idx) => {
        if (idx === state.currentLevel) {
            dot.classList.remove('active');
            dot.classList.add('done');
        }
    });
    if (state.currentLevel < 2) {
        dotLines[state.currentLevel].classList.add('done');
    }

    if (state.currentLevel < 2) {
        state.currentLevel++;
        state.isFinished = false;
        flashStatus('Correct! Loading next level…', '#1d7a4a');
        submitBtn.disabled = true;
        setTimeout(() => { initLevel(); }, 1100);
    } else {
        setTimeout(completeQuiz, 600);
    }
}

function completeQuiz() {
    state.isFinished = true;
    stopTimer();
    hideScreen(quizScreen);
    showScreen(completeScreen);
    modal.classList.remove('open');
    launchConfetti();
}

// ================================================================
//  SUBMIT HANDLER
// ================================================================

function handleSubmit() {
    if (state.isFinished) return;
    if (state.answers.some(a => a === null)) {
        flashStatus('Please answer both questions.', '#b13e3e');
        return;
    }

    const qs = state.selectedQuestions;
    const allCorrect = state.answers.every((ans, idx) => ans === qs[idx].correct);

    if (allCorrect) {
        handleLevelPass();
    } else {
        const wrongIndices = state.answers
            .map((ans, idx) => ({ idx, ans, correct: qs[idx].correct }))
            .filter(({ ans, correct }) => ans !== correct)
            .map(({ idx }) => idx);

        // shake wrong cards
        wrongIndices.forEach(i => {
            const card = document.querySelector(`.question-card[data-qidx="${i}"]`);
            if (card) {
                card.classList.remove('shake');
                void card.offsetWidth;
                card.classList.add('shake');
            }
        });

        const wrongLetters = wrongIndices.map(i => String.fromCharCode(65 + i));
        flashStatus(`Question${wrongLetters.length > 1 ? 's' : ''} ${wrongLetters.join(' & ')} incorrect.`, '#b13e3e');
        submitBtn.disabled = true;

        setTimeout(() => {
            if (!state.isFinished) handleLevelFail('Incorrect answer(s).');
        }, 950);
    }
}

// ================================================================
//  CONFETTI
// ================================================================

function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    function resize() {
        canvas.width = canvas.offsetWidth * dpr;
        canvas.height = canvas.offsetHeight * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    const colors = ['#a40202', '#003f5c', '#ffd166', '#06d6a0', '#ef476f', '#118ab2'];
    const pieces = [];
    const W = canvas.offsetWidth, H = canvas.offsetHeight;
    for (let i = 0; i < 140; i++) {
        pieces.push({
            x: W / 2 + (Math.random() - 0.5) * 80,
            y: H * 0.35 + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 8,
            vy: -Math.random() * 9 - 4,
            g: 0.22 + Math.random() * 0.1,
            size: 4 + Math.random() * 6,
            rot: Math.random() * Math.PI,
            vr: (Math.random() - 0.5) * 0.3,
            color: colors[(Math.random() * colors.length) | 0],
            life: 0
        });
    }

    let raf;
    const start = performance.now();
    function tick(now) {
        const t = now - start;
        ctx.clearRect(0, 0, W, H);
        pieces.forEach(p => {
            p.vy += p.g;
            p.x += p.vx;
            p.y += p.vy;
            p.rot += p.vr;
            p.life++;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = Math.max(0, 1 - t / 3500);
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
            ctx.restore();
        });
        if (t < 3500) raf = requestAnimationFrame(tick);
        else ctx.clearRect(0, 0, W, H);
    }
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(tick);
}

// ================================================================
//  RESET / RESTART
// ================================================================

function resetQuiz() {
    stopTimer();
    state = {
        currentLevel: 0,
        selectedQuestions: [],
        answers: [],
        timer: 180,
        timerInterval: null,
        isFinished: false,
        levelResults: []
    };
    modal.classList.remove('open');
    showScreen(startScreen);
    hideScreen(quizScreen);
    hideScreen(completeScreen);
    progressDots.forEach((dot, idx) => {
        dot.classList.remove('active', 'done', 'fail');
        if (idx === 0) dot.classList.add('active');
    });
    dotLines.forEach(line => line.classList.remove('done'));
    timerBox.classList.remove('warning');
    timerDisplay.textContent = '3:00';
    statusMsg.textContent = '';
    submitBtn.disabled = true;
}

// ================================================================
//  EVENT BINDING
// ================================================================

startBtn.addEventListener('click', () => {
    resetQuiz();
    state.currentLevel = 0;
    state.levelResults = [];
    state.isFinished = false;
    initLevel();
});

retryCompleteBtn.addEventListener('click', resetQuiz);
submitBtn.addEventListener('click', handleSubmit);
attachRipple(submitBtn);

modalEndBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    resetQuiz();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !submitBtn.disabled && !quizScreen.classList.contains('hidden')) {
        handleSubmit();
    }
});

// ================================================================
//  INIT
// ================================================================

resetQuiz();
console.log('Math Quiz ready ✨');
