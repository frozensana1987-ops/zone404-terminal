const questData = [
    {
        id: 'boot',
        type: 'boot',
        lines: [
            { text: '[BOOT SEQUENCE INITIATED]', class: 'system', delay: 800 },
            { text: 'SCANNING FOR LIFE SIGNS...', class: 'system', delay: 1200 },
            { text: '[SUBJECT DETECTED]', class: 'success', delay: 800 },
            { text: 'CORE TEMPERATURE: STABLE', class: 'system', delay: 600 },
            { text: 'ACCESSING MAIN MEMORY...', class: 'system', delay: 1000 },
            { text: '────────────────────────────────────────', class: 'divider', delay: 400 },
            { text: 'Я — ИИ-система "ИСКРА".', class: 'ai', delay: 800 },
            { text: 'Этот терминал заброшен 738 дней назад.', class: 'ai', delay: 600 },
            { text: 'Похоже, ты нашёл то, что давно искал...', class: 'ai', delay: 800 },
            { text: 'Для получения доступа к архиву исследований', class: 'ai', delay: 400 },
            { text: 'пройди серию диагностических проверок.', class: 'ai', delay: 600 },
            { text: '────────────────────────────────────────', class: 'divider', delay: 400 },
            { text: '[ДОСТУП РАЗРЕШЁН. ЗАПУСК ПРОТОКОЛА "ИСКРА"...]', class: 'success', delay: 1000 }
        ],
        nextLevel: 1
    },
    {
        id: 'tictactoe',
        type: 'game',
        gameName: 'tictactoe',
        title: 'ДИАГНОСТИКА #1: ПРОТОКОЛ ВЗАИМОДЕЙСТВИЯ',
        description: [
            'Режим: Крестики-нолики.',
            'Результат: Победа или ничья.',
            '',
            'Правила:',
            '- Вы играете крестиками (X)',
            '- ИИ играет ноликами (O)',
            '- Кликните на клетку для хода',
            '',
            'Клетки нумеруются:',
            '[1][2][3]',
            '[4][5][6]',
            '[7][8][9]'
        ],
        biometric: {
            attempts: 3,
            type: 'retina',
            icon: '👁',
            name: 'СКАНИРОВАНИЕ СЕТЧАТКИ'
        },
        successText: '[ДИАГНОСТИКА #1 ПРОЙДЕНА]',
        failText: '[БИОМЕТРИЧЕСКАЯ АУТЕНТИФИКАЦИЯ: СЕТЧАТКА]',
        nextLevel: 2
    },
    {
        id: 'memory',
        type: 'game',
        gameName: 'memory',
        title: 'ДИАГНОСТИКА #2: ТЕСТ ПАМЯТИ',
        description: [
            'Протокол: Память.',
            'Сетка 4x4. Найди все пары.',
            'Попыток: 20.',
            '',
            'Кликните на клетку, чтобы открыть символ.',
            'Найдите две одинаковые клетки.'
        ],
        biometric: {
            attempts: 3,
            type: 'fingerprint',
            icon: '🖐',
            name: 'СКАНИРОВАНИЕ ДАКТИЛОСКОПИИ'
        },
        successText: '[ДИАГНОСТИКА #2 ПРОЙДЕНА]',
        failText: '[БИОМЕТРИЧЕСКАЯ АУТЕНТИФИКАЦИЯ: ОТПЕЧАТКИ]',
        nextLevel: 3
    },
    {
        id: 'investigation1',
        type: 'investigation',
        title: 'РАССЛЕДОВАНИЕ #1',
        intro: [
            { text: '[ДОСТУП К АРХИВУ ПЕРСОНАЛЬНЫХ ДАННЫХ]', class: 'system' },
            { text: '────────────────────────────────────────', class: 'divider' },
            { text: 'Интересно... Этот терминал принадлежал человеку', class: 'ai' },
            { text: 'по кодовому имени "СУБЪЕКТ-А".', class: 'ai' },
            { text: 'Давай проверим, не связан ли ты с ним.', class: 'ai' },
            { text: '────────────────────────────────────────', class: 'divider' },
            { text: 'image:assets/images/level2.jpg', class: 'image' },
            { text: '[АРХИВНОЕ ФОТО: СУБЪЕКТ-А. Лесной паркет. Дата неизвестна.]', class: 'system' }
        ],
        questions: [
            {
                text: 'ВОПРОС 1: Какое боевое искусство ты пытался применить,\nкогда поскользнулся на этом лесном паркете?',
                placeholder: '[Введите ответ]',
                answers: ['каратэ', 'karate', 'карате'],
                successResponse: '[ОШИБКА ПАРСИНГА] СИНТАКСИЧЕСКИЙ ЯД НЕ ОБНАРУЖЕН.\nСУБЪЕКТ ОПРЕДЕЛЁН КАК ЧЕЛОВЕК.',
                acceptAny: false
            },
            {
                image: 'assets/images/level2_1.jpg',
                imageHint: '[АРХИВНОЕ ФОТО: Философский камень. Четвёрка друзей.]',
                text: 'ВОПРОС 2: На Философском камне вас было четверо.\nНазови имя первого, кто вышел из зоны бармена.',
                placeholder: '[Введите ответ]',
                answers: ['машина', 'Машина', 'МАШИНА'],
                successResponse: '[ФРАГМЕНТ ПАМЯТИ ВОССТАНОВЛЕН] ЭМОЦИОНАЛЬНЫЙ ОТКЛИК: 98%.',
                acceptAny: false
            }
        ],
        completionText: '[ДОСТУП К УРОВНЮ 3 РАЗРЕШЁН]',
        nextLevel: 4
    },
    {
        id: 'seabattle',
        type: 'game',
        gameName: 'seabattle',
        title: 'ДИАГНОСТИКА #3: ПРОТОКОЛ СТРАТЕГИИ',
        description: [
            'Режим: Морской бой.',
            'Поле: 6x6.',
            'Выстрелов: 20.',
            '',
            'Размещение ИИ:',
            '- 1x [■■■] (3 клетки)',
            '- 2x [■■] (2 клетки)',
            '- 1x [■] (1 клетка)',
            '',
            'Кликните на клетку для выстрела.',
            'Задача: потопить все корабли.'
        ],
        biometric: {
            attempts: 3,
            type: 'voice',
            icon: '🎤',
            name: 'РАСПОЗНАВАНИЕ ГОЛОСА'
        },
        successText: '[ДИАГНОСТИКА #3 ПРОЙДЕНА]',
        failText: '[БИОМЕТРИЧЕСКАЯ АУТЕНТИФИКАЦИЯ: ГОЛОС]',
        nextLevel: 5
    },
    {
        id: 'tw truths',
        type: 'game',
        gameName: 'truthslie',
        title: 'ДИАГНОСТИКА #4: ТЕСТ ИНТУИЦИИ',
        description: [
            'Протокол: "Две правды и ложь".',
            '',
            'ИИ выдаёт 3 утверждения.',
            'Одно из них — ложь.',
            'Угадай какое.',
            '',
            'Кликните на номер утверждения.'
        ],
        statements: [
            { text: 'У осьминога три сердца.', isTrue: true },
            { text: 'Человек может выжить без еды около трёх недель.', isTrue: true },
            { text: 'Вода закипает при 90 градусах на уровне моря.', isTrue: false }
        ],
        lieIndex: 2,
        successText: '[ДИАГНОСТИКА #4 ПРОЙДЕНА]',
        failText: '[ОШИБКА] Неверный ответ.',
        nextLevel: 6
    },
    {
        id: 'investigation2',
        type: 'investigation',
        title: 'РАССЛЕДОВАНИЕ #2',
        intro: [
            { text: '[АРХИВ РАСШИРЕН. ДАННЫЕ РАСКОДИРОВАНЫ.]', class: 'system' },
            { text: '────────────────────────────────────────', class: 'divider' },
            { text: 'СУБЪЕКТ-А был инженером-сварщиком.', class: 'ai' },
            { text: 'Его последний проект: "Неоновая Академия-2077".', class: 'ai' },
            { text: 'Похоже, он оставил кое-что для того,', class: 'ai' },
            { text: 'кто сможет пройти все проверки.', class: 'ai' },
            { text: '────────────────────────────────────────', class: 'divider' },
            { text: 'image:assets/images/levelD.jpg', class: 'image' },
            { text: '[АРХИВНОЕ ФОТО: СУБЪЕКТ-А. Дикий Урал.]', class: 'system' }
        ],
        questions: [
            {
                text: 'ВОПРОС 1: На Диком Урале ты познал мир таким,\nкаким не смог бы познать в одиночку.\nКакой объект стал символом этого путешествия?',
                placeholder: '[Введите ответ]',
                answers: [],
                successResponse: '[ОТВЕТ ПРИНЯТ] АНАЛИЗ ДАННЫХ...',
                acceptAny: true
            },
            {
                text: 'ВОПРОС 2: В точке [Парк "Оленьи ручьи"] была произведена\nкалибровка ДНК вида Homo Sapiens.\nКаков был вектор главной ошибки навигации спутника в тот день?',
                placeholder: '[Введите ответ]',
                answers: [],
                successResponse: '[ОТВЕТ ПРИНЯТ] ДАННЫЕ ИНТЕГРИРОВАНЫ В БАЗУ.',
                acceptAny: true
            }
        ],
        completionText: '[ДОСТУП К ФИНАЛЬНОМУ УРОВНЮ РАЗРЕШЁН]',
        nextLevel: 7
    },
    {
        id: 'cipher',
        type: 'game',
        gameName: 'cipher',
        title: 'ДИАГНОСТИКА #5: ФИНАЛЬНЫЙ ШИФР',
        description: [
            'Расшифруй сообщение для доступа к архиву.',
            '',
            'Шифр: Атбаш',
            '(А↔Я, Б↔Ю, В↔Ц, ...)',
            '',
            'Зашифровано: ЛКОНИТЛ',
            '',
            'Введи расшифрованное слово.'
        ],
        correctAnswer: 'ПРОТОТИП',
        successText: '[ШИФР РАСШИФРОВАН. ДОСТУП К АРХИВУ РАЗРЕШЁН.]',
        failText: '[ОШИБКА] Неверная расшифровка.',
        nextLevel: 8
    },
    {
        id: 'ending',
        type: 'ending',
        lines: [
            { text: '═══════════════════════════════════════════', class: 'divider' },
            { text: 'ПОЛУЧЕНИЕ ПРОТОТИПА', class: 'success' },
            { text: '═══════════════════════════════════════════', class: 'divider' },
            { text: '', class: 'system' },
            { text: 'image:assets/images/gift.svg', class: 'image' },
            { text: '', class: 'system' },
            { text: '╔═══════════════════════════════════════════╗', class: 'ai' },
            { text: '║  ОБЪЕКТ: СВАРОЧНЫЙ КОМПЛЕКС              ║', class: 'ai' },
            { text: '║  "ARC FORGE 2077"                        ║', class: 'ai' },
            { text: '╠═══════════════════════════════════════════╣', class: 'ai' },
            { text: '║  ХАРАКТЕРИСТИКИ:                          ║', class: 'ai' },
            { text: '║  - Цвет: Чёрный                           ║', class: 'ai' },
            { text: '║  - Мощность: Высокая                      ║', class: 'ai' },
            { text: '║  - Защита: Усиленная                      ║', class: 'ai' },
            { text: '║  - Подача дуги: Прямая                    ║', class: 'ai' },
            { text: '║  - Назначение: Заделает любые дыры на     ║', class: 'ai' },
            { text: '║    орбитальной станции, создаст детали    ║', class: 'ai' },
            { text: '║    для развития                           ║', class: 'ai' },
            { text: '╠═══════════════════════════════════════════╣', class: 'ai' },
            { text: '║  СТАТУС: ГРУЗ УПАКОВАН                    ║', class: 'warning' },
            { text: '║  ПРОТОТИП ВЫСЛАН КУРЬЕРОМ                 ║', class: 'warning' },
            { text: '║  ДОСТАВКА: В ТЕЧЕНИЕ МИНУТЫ               ║', class: 'warning' },
            { text: '╚═══════════════════════════════════════════╝', class: 'ai' },
            { text: '', class: 'system' },
            { text: '────────────────────────────────────────', class: 'divider' },
            { text: 'СУБЪЕКТ-А распорядился передать это тому,', class: 'ai' },
            { text: 'кто пройдёт все проверки.', class: 'ai' },
            { text: '', class: 'system' },
            { text: 'ПРОТОКОЛ "ИСКРА" ЗАВЕРШЁН.', class: 'success' },
            { text: 'ПРИЯТНОГО ПОДАРОКА, ЧЕЛОВЕК.', class: 'success' }
        ],
        nextLevel: null
    }
];

const SYMBOLS = ['█', '▓', '░', '▒', '▄', '▀', '■', '□'];
const ATBASH_MAP = {
    'А': 'Я', 'Б': 'Ю', 'В': 'Ц', 'Г': 'Ч', 'Д': 'Ш', 'Е': 'Ж',
    'Ж': 'Е', 'З': 'Ф', 'И': 'Т', 'Й': 'Ы', 'К': 'Р', 'Л': 'П',
    'М': 'О', 'Н': 'М', 'О': 'Н', 'П': 'Л', 'Р': 'К', 'С': 'Н',
    'Т': 'И', 'У': 'Г', 'Ф': 'З', 'Х': 'Ъ', 'Ц': 'В', 'Ч': 'Г',
    'Ш': 'Д', 'Щ': 'З', 'Ъ': 'Х', 'Ы': 'Й', 'Ь': 'Ь', 'Э': 'Э',
    'Ю': 'Б', 'Я': 'А'
};

let currentLevel = 0;
let isTyping = false;
let typingQueue = [];
let gameAttempts = 0;
let totalAttempts = { tictactoe: 0, memory: 0, seabattle: 0 };
let memoryCards = [];
let memoryFlipped = [];
let memoryMatched = [];
let memoryMoves = 0;
let seaBattlePlayerBoard = [];
let seaBattleAIBoard = [];
let seaBattleShips = [];
let seaBattleHits = 0;
let seaBattleTotalShips = 0;
let seaBattleShotsLeft = 0;

const logEl = document.getElementById('log');
const inputArea = document.getElementById('input-area');
const userInput = document.getElementById('userInput');
const gameBoard = document.getElementById('game-board');
const actionButtons = document.getElementById('action-buttons');

let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

function initAudio() {
    document.addEventListener('click', () => {
        const ctx = getAudioContext();
        ctx.resume();
    }, { once: true });
    
    document.addEventListener('keydown', () => {
        const ctx = getAudioContext();
        ctx.resume();
    }, { once: true });
}

function playTypeSound() {
    try {
        const ctx = getAudioContext();
        if (ctx.state !== 'running') return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 800 + Math.random() * 400;
        osc.type = 'square';
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.06);
    } catch(e) {}
}

function playErrorSound() {
    try {
        const ctx = getAudioContext();
        if (ctx.state !== 'running') return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 200;
        osc.type = 'sawtooth';
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.35);
    } catch(e) {}
}

function playSuccessSound() {
    try {
        const ctx = getAudioContext();
        if (ctx.state !== 'running') return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.15);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.45);
    } catch(e) {}
}

function playBgLoop() {
    try {
        const ctx = getAudioContext();
        if (ctx.state !== 'running') return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 55;
        osc.type = 'sine';
        gain.gain.value = 0.08;
        osc.start();
        window._bgOsc = osc;
        window._bgGain = gain;
    } catch(e) {}
}

function playSound(sound) {
    if (typeof sound === 'function') {
        try {
            sound();
        } catch(e) {}
    }
}

function clearLog() {
    logEl.innerHTML = '';
}

function addLogEntry(text, className = '') {
    const entry = document.createElement('div');
    entry.className = `log-entry ${className}`;
    
    if (text.startsWith('image:')) {
        const imgPath = text.replace('image:', '');
        entry.innerHTML = `<img src="${imgPath}" alt="image" onerror="this.style.display='none'">`;
    } else {
        entry.textContent = text;
    }
    
    logEl.appendChild(entry);
    logEl.scrollTop = logEl.scrollHeight;
    return entry;
}

async function typeWriter(text, className = '', speed = 25) {
    return new Promise((resolve) => {
        if (text.startsWith('image:')) {
            const entry = document.createElement('div');
            entry.className = `log-entry ${className}`;
            const imgPath = text.replace('image:', '');
            entry.innerHTML = `<img src="${imgPath}" alt="image" style="max-width:100%;max-height:300px;border:1px solid #004400;border-radius:4px;" onerror="this.style.display='none'">`;
            logEl.appendChild(entry);
            logEl.scrollTop = logEl.scrollHeight;
            resolve();
            return;
        }
        
        const entry = document.createElement('div');
        entry.className = `log-entry ${className}`;
        logEl.appendChild(entry);
        
        let i = 0;
        let lastSoundTime = 0;
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        cursor.textContent = '█';
        entry.appendChild(cursor);
        
        const interval = setInterval(() => {
            if (i < text.length) {
                entry.insertBefore(document.createTextNode(text[i]), cursor);
                i++;
                logEl.scrollTop = logEl.scrollHeight;
                
                const now = Date.now();
                if (now - lastSoundTime > 80 && text[i-1] !== ' ') {
                    playSound(playTypeSound);
                    lastSoundTime = now;
                }
            } else {
                clearInterval(interval);
                cursor.remove();
                resolve();
            }
        }, speed);
    });
}

async function typeLines(lines) {
    for (const line of lines) {
        if (line.delay) {
            await new Promise(r => setTimeout(r, line.delay));
        }
        await typeWriter(line.text, line.class);
    }
}

function showInput(placeholder = '[Введите ответ]') {
    inputArea.style.display = 'flex';
    userInput.value = '';
    userInput.placeholder = placeholder;
    userInput.focus();
}

function hideInput() {
    inputArea.style.display = 'none';
}

function showGameBoard() {
    gameBoard.style.display = 'block';
}

function hideGameBoard() {
    gameBoard.style.display = 'none';
    gameBoard.innerHTML = '';
}

function showButtons(buttons) {
    actionButtons.style.display = 'flex';
    actionButtons.innerHTML = '';
    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.className = `action-btn ${btn.primary ? 'primary' : ''}`;
        button.textContent = btn.text;
        button.onclick = btn.action;
        actionButtons.appendChild(button);
    });
}

function hideButtons() {
    actionButtons.style.display = 'none';
    actionButtons.innerHTML = '';
}

async function showBiometric(type, icon, name) {
    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        overlay.className = 'biometric-overlay';
        overlay.innerHTML = `
            <div class="biometric-content">
                <div class="biometric-icon">${icon}</div>
                <div class="biometric-text">${name}...</div>
                <div class="biometric-match">АНАЛИЗ...</div>
            </div>
        `;
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            const matchEl = overlay.querySelector('.biometric-match');
            matchEl.textContent = '23%';
            matchEl.style.color = 'var(--error)';
        }, 1000);
        
        setTimeout(() => {
            overlay.remove();
            resolve();
        }, 2000);
    });
}

async function handleBiometricFail(level) {
    const data = questData.find(q => q.id === level);
    if (!data || !data.biometric) return false;
    
    gameAttempts++;
    
    if (gameAttempts >= data.biometric.attempts) {
        await showBiometric(
            data.biometric.type,
            data.biometric.icon,
            data.biometric.name
        );
        
        await typeWriter(`[АНОМАЛИЯ] Биометрический профиль совпадает с СУБЪЕКТОМ-А на 71%.`, 'success');
        await typeWriter('Доступ предоставлен.', 'success');
        await new Promise(r => setTimeout(r, 1000));
        
        gameAttempts = 0;
        return true;
    }
    
    playSound(playErrorSound);
    await typeWriter(`[ОШИБКА] ${data.failText}... Совпадение: ${gameAttempts * 23}%. Продолжай.`, 'error');
    return false;
}

function initTicTacToe() {
    gameBoard.innerHTML = '';
    const board = document.createElement('div');
    board.className = 'tic-tac-toe';
    
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        cell.onclick = () => playerMove(i);
        board.appendChild(cell);
    }
    
    gameBoard.appendChild(board);
    showGameBoard();
}

let ticTacToeBoard = Array(9).fill(null);
let ticTacToeGameOver = false;

function playerMove(index) {
    if (ticTacToeBoard[index] || ticTacToeGameOver) return;
    
    playSound(playTypeSound);
    ticTacToeBoard[index] = 'X';
    updateTicTacToeBoard();
    
    if (checkWinner('X')) {
        ticTacToeGameOver = true;
        playSound(playSuccessSound);
        typeWriter('[ПОБЕДА] Ты победил ИИ!', 'success');
        setTimeout(() => nextLevel(), 2000);
        return;
    }
    
    if (ticTacToeBoard.every(cell => cell)) {
        ticTacToeGameOver = true;
        playSound(playSuccessSound);
        typeWriter('[НИЧЬЯ] ИИ принимает результат.', 'success');
        setTimeout(() => nextLevel(), 2000);
        return;
    }
    
    setTimeout(aiMoveTicTacToe, 500);
}

function aiMoveTicTacToe() {
    const move = getBestMove();
    ticTacToeBoard[move] = 'O';
    playSound(playTypeSound);
    updateTicTacToeBoard();
    
    if (checkWinner('O')) {
        ticTacToeGameOver = true;
        playSound(playErrorSound);
        typeWriter('[ПОРАЖЕНИЕ] ИИ победил.', 'error');
        totalAttempts.tictactoe++;
        setTimeout(async () => {
            const bypass = await handleBiometricFail('tictactoe');
            if (bypass) {
                nextLevel();
            } else {
                resetTicTacToe();
            }
        }, 1500);
        return;
    }
    
    if (ticTacToeBoard.every(cell => cell)) {
        ticTacToeGameOver = true;
        playSound(playSuccessSound);
        typeWriter('[НИЧЬЯ] ИИ принимает результат.', 'success');
        setTimeout(() => nextLevel(), 2000);
    }
}

function getBestMove() {
    for (let i = 0; i < 9; i++) {
        if (!ticTacToeBoard[i]) {
            ticTacToeBoard[i] = 'O';
            if (checkWinner('O')) { ticTacToeBoard[i] = null; return i; }
            ticTacToeBoard[i] = null;
        }
    }
    
    for (let i = 0; i < 9; i++) {
        if (!ticTacToeBoard[i]) {
            ticTacToeBoard[i] = 'X';
            if (checkWinner('X')) { ticTacToeBoard[i] = null; return i; }
            ticTacToeBoard[i] = null;
        }
    }
    
    const corners = [0, 2, 6, 8];
    const emptyCorners = corners.filter(i => !ticTacToeBoard[i]);
    if (emptyCorners.length) return emptyCorners[Math.floor(Math.random() * emptyCorners.length)];
    
    if (!ticTacToeBoard[4]) return 4;
    
    const edges = [1, 3, 5, 7];
    const emptyEdges = edges.filter(i => !ticTacToeBoard[i]);
    if (emptyEdges.length) return emptyEdges[Math.floor(Math.random() * emptyEdges.length)];
    
    return ticTacToeBoard.indexOf(null);
}

function checkWinner(player) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return lines.some(line => line.every(i => ticTacToeBoard[i] === player));
}

function updateTicTacToeBoard() {
    const cells = gameBoard.querySelectorAll('.cell');
    cells.forEach((cell, i) => {
        cell.textContent = ticTacToeBoard[i] || '';
        cell.className = 'cell';
        if (ticTacToeBoard[i] === 'X') cell.classList.add('x');
        if (ticTacToeBoard[i] === 'O') cell.classList.add('o');
    });
}

function resetTicTacToe() {
    ticTacToeBoard = Array(9).fill(null);
    ticTacToeGameOver = false;
    updateTicTacToeBoard();
}

function initMemory() {
    memoryCards = [];
    memoryFlipped = [];
    memoryMatched = [];
    memoryMoves = 0;
    
    const pairs = [...SYMBOLS, ...SYMBOLS];
    for (let i = pairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
    }
    
    gameBoard.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'memory-game';
    
    pairs.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = index;
        card.dataset.symbol = symbol;
        card.textContent = '?';
        card.onclick = () => flipCard(index);
        grid.appendChild(card);
        memoryCards.push({ symbol, flipped: false, matched: false });
    });
    
    gameBoard.appendChild(grid);
    showGameBoard();
}

function flipCard(index) {
    if (memoryFlipped.length >= 2) return;
    if (memoryCards[index].flipped || memoryCards[index].matched) return;
    
    playSound(playTypeSound);
    memoryCards[index].flipped = true;
    memoryFlipped.push(index);
    
    const card = gameBoard.querySelectorAll('.card')[index];
    card.textContent = memoryCards[index].symbol;
    card.classList.add('flipped');
    
    if (memoryFlipped.length === 2) {
        memoryMoves++;
        const [first, second] = memoryFlipped;
        
        if (memoryCards[first].symbol === memoryCards[second].symbol) {
            memoryCards[first].matched = true;
            memoryCards[second].matched = true;
            memoryMatched.push(memoryCards[first].symbol);
            
            const cards = gameBoard.querySelectorAll('.card');
            cards[first].classList.add('matched');
            cards[second].classList.add('matched');
            
            playSound(playSuccessSound);
            
            if (memoryMatched.length === SYMBOLS.length) {
                typeWriter('[ПОБЕДА] Все пары найдены!', 'success');
                setTimeout(() => nextLevel(), 2000);
            }
        } else {
            setTimeout(() => {
                memoryCards[first].flipped = false;
                memoryCards[second].flipped = false;
                const cards = gameBoard.querySelectorAll('.card');
                cards[first].textContent = '?';
                cards[second].textContent = '?';
                cards[first].classList.remove('flipped');
                cards[second].classList.remove('flipped');
            }, 1000);
        }
        
        memoryFlipped = [];
        
        if (memoryMoves >= 20 && memoryMatched.length < SYMBOLS.length) {
            playSound(playErrorSound);
            typeWriter('[ОШИБКА] Превышено количество попыток.', 'error');
            totalAttempts.memory++;
            setTimeout(async () => {
                const bypass = await handleBiometricFail('memory');
                if (bypass) {
                    nextLevel();
                } else {
                    initMemory();
                }
            }, 1500);
        }
    }
}

function initSeaBattle() {
    seaBattlePlayerBoard = Array(36).fill(null);
    seaBattleAIBoard = Array(36).fill(null);
    seaBattleShips = [];
    seaBattleHits = 0;
    seaBattleTotalShips = 0;
    seaBattleShotsLeft = 20;
    
    const ships = [
        { size: 3, count: 1 },
        { size: 2, count: 2 },
        { size: 1, count: 1 }
    ];
    
    ships.forEach(ship => {
        for (let i = 0; i < ship.count; i++) {
            placeShip(seaBattleAIBoard, ship.size);
            seaBattleTotalShips += ship.size;
        }
    });
    
    placePlayerShips();
    
    gameBoard.innerHTML = '';
    
    const shotsInfo = document.createElement('div');
    shotsInfo.id = 'shots-info';
    shotsInfo.style.cssText = 'text-align: center; margin-bottom: 10px; color: var(--cyan); font-size: 14px;';
    shotsInfo.textContent = `Выстрелов: ${seaBattleShotsLeft}`;
    gameBoard.appendChild(shotsInfo);
    
    const grid = document.createElement('div');
    grid.className = 'sea-battle';
    
    for (let i = 0; i < 36; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        const row = Math.floor(i / 6);
        const col = i % 6;
        cell.textContent = String.fromCharCode(65 + row) + (col + 1);
        cell.onclick = () => fireAt(i);
        grid.appendChild(cell);
    }
    
    gameBoard.appendChild(grid);
    showGameBoard();
}

function placeShip(board, size) {
    let placed = false;
    while (!placed) {
        const horizontal = Math.random() > 0.5;
        const startRow = Math.floor(Math.random() * 6);
        const startCol = Math.floor(Math.random() * 6);
        
        let canPlace = true;
        const positions = [];
        
        for (let i = 0; i < size; i++) {
            const row = horizontal ? startRow : startRow + i;
            const col = horizontal ? startCol + i : startCol;
            
            if (row >= 6 || col >= 6) {
                canPlace = false;
                break;
            }
            
            const index = row * 6 + col;
            if (board[index] === 'ship') {
                canPlace = false;
                break;
            }
            positions.push(index);
        }
        
        if (canPlace) {
            positions.forEach(pos => board[pos] = 'ship');
            seaBattleShips.push({ positions, hits: 0 });
            placed = true;
        }
    }
}

function placePlayerShips() {
    placeShip(seaBattlePlayerBoard, 3);
    placeShip(seaBattlePlayerBoard, 2);
    placeShip(seaBattlePlayerBoard, 2);
    placeShip(seaBattlePlayerBoard, 1);
}

function fireAt(index) {
    if (seaBattleAIBoard[index] === 'hit' || seaBattleAIBoard[index] === 'miss') return;
    if (seaBattleShotsLeft <= 0) return;
    
    playSound(playTypeSound);
    seaBattleShotsLeft--;
    
    const shotsInfo = document.getElementById('shots-info');
    if (shotsInfo) shotsInfo.textContent = `Выстрелов: ${seaBattleShotsLeft}`;
    
    if (seaBattleAIBoard[index] === 'ship') {
        seaBattleAIBoard[index] = 'hit';
        seaBattleHits++;
        
        const cell = gameBoard.querySelectorAll('.cell')[index];
        cell.classList.add('hit');
        cell.textContent = 'X';
        
        const ship = seaBattleShips.find(s => s.positions.includes(index));
        if (ship) ship.hits++;
        
        if (seaBattleHits >= seaBattleTotalShips) {
            playSound(playSuccessSound);
            typeWriter('[ПОБЕДА] Все корабли потоплены!', 'success');
            setTimeout(() => nextLevel(), 2000);
            return;
        }
    } else {
        seaBattleAIBoard[index] = 'miss';
        const cell = gameBoard.querySelectorAll('.cell')[index];
        cell.classList.add('miss');
        cell.textContent = '·';
    }
    
    if (seaBattleShotsLeft <= 0) {
        playSound(playErrorSound);
        typeWriter('[ОШИБКА] Боезапас исчерпан. Корабли не потоплены.', 'error');
        totalAttempts.seabattle++;
        setTimeout(async () => {
            const bypass = await handleBiometricFail('seabattle');
            if (bypass) {
                nextLevel();
            } else {
                initSeaBattle();
            }
        }, 1500);
        return;
    }
    
    setTimeout(aiFireSeaBattle, 800);
}

function aiFireSeaBattle() {
    let index;
    do {
        index = Math.floor(Math.random() * 36);
    } while (seaBattlePlayerBoard[index] === 'hit' || seaBattlePlayerBoard[index] === 'miss');
    
    if (seaBattlePlayerBoard[index] === 'ship') {
        seaBattlePlayerBoard[index] = 'hit';
    } else {
        seaBattlePlayerBoard[index] = 'miss';
    }
}

function initTruthsLie() {
    gameBoard.innerHTML = '';
    const container = document.createElement('div');
    container.style.cssText = 'padding: 15px; text-align: center;';
    
    questData.find(q => q.id === 'tw truths').statements.forEach((stmt, index) => {
        const btn = document.createElement('button');
        btn.className = 'action-btn';
        btn.style.cssText = 'display: block; width: 100%; margin: 10px 0; text-align: left; padding: 15px;';
        btn.innerHTML = `<strong>${index + 1}.</strong> ${stmt.text}`;
        btn.onclick = () => checkTruthsLie(index);
        container.appendChild(btn);
    });
    
    gameBoard.appendChild(container);
    showGameBoard();
}

async function checkTruthsLie(index) {
    const data = questData.find(q => q.id === 'tw truths');
    hideGameBoard();
    
    if (index === data.lieIndex) {
        playSound(playSuccessSound);
        await typeWriter('[ПРАВИЛЬНО] Ты распознал ложь.', 'success');
        setTimeout(() => nextLevel(), 1500);
    } else {
        playSound(playErrorSound);
        await typeWriter('[НЕВЕРНО] Это была правда.', 'error');
        await typeWriter('ИИ: "Не расстраивайся. Продолжаем..."', 'ai');
        setTimeout(() => nextLevel(), 2000);
    }
}

function initCipher() {
    showInput('[Введите расшифрованное слово]');
}

async function checkCipherAnswer(answer) {
    const data = questData.find(q => q.id === 'cipher');
    
    if (answer.toUpperCase() === data.correctAnswer) {
        playSound(playSuccessSound);
        hideInput();
        await typeWriter(data.successText, 'success');
        setTimeout(() => nextLevel(), 1500);
    } else {
        playSound(playErrorSound);
        await typeWriter(data.failText, 'error');
        showInput('[Попробуйте ещё раз]');
    }
}

async function startInvestigation(investigationId) {
    const data = questData.find(q => q.id === investigationId);
    if (!data) return;
    
    await typeLines(data.intro);
    
    for (const question of data.questions) {
        await new Promise(r => setTimeout(r, 500));
        
        if (question.image) {
            await typeWriter(`image:${question.image}`, 'image');
            if (question.imageHint) {
                await typeWriter(question.imageHint, 'system');
            }
            await new Promise(r => setTimeout(r, 500));
        }
        
        await typeWriter(question.text, 'question');
        showInput(question.placeholder);
        
        await new Promise(resolve => {
            const handler = async (e) => {
                if (e.key === 'Enter') {
                    const answer = userInput.value.trim();
                    if (!answer) return;
                    
                    playSound(playTypeSound);
                    await typeWriter(`> ${answer}`, 'system');
                    
                    if (question.acceptAny) {
                        hideInput();
                        userInput.removeEventListener('keydown', handler);
                        await typeWriter(question.successResponse, 'success');
                        resolve();
                    } else if (question.answers.includes(answer.toLowerCase())) {
                        hideInput();
                        userInput.removeEventListener('keydown', handler);
                        await typeWriter(question.successResponse, 'success');
                        resolve();
                    } else {
                        playSound(playErrorSound);
                        await typeWriter('[ОШИБКА] Неверный ответ. Попробуйте снова.', 'error');
                        userInput.value = '';
                    }
                }
            };
            userInput.addEventListener('keydown', handler);
        });
    }
    
    await new Promise(r => setTimeout(r, 500));
    await typeWriter(data.completionText, 'success');
    await new Promise(r => setTimeout(r, 1000));
    
    currentLevel = data.nextLevel;
    startLevel();
}

async function startLevel() {
    const data = questData[currentLevel];
    if (!data) return;
    
    hideInput();
    hideGameBoard();
    hideButtons();
    gameAttempts = 0;
    ticTacToeGameOver = false;
    ticTacToeBoard = Array(9).fill(null);
    
    clearLog();
    await new Promise(r => setTimeout(r, 300));
    
    switch (data.type) {
        case 'boot':
            await typeLines(data.lines);
            showButtons([{ text: 'НАЧАТЬ ДИАГНОСТИКУ', primary: true, action: () => nextLevel() }]);
            break;
            
        case 'game':
            await typeWriter(data.title, 'ai');
            for (const line of data.description) {
                await typeWriter(line, 'system');
            }
            
            await new Promise(r => setTimeout(r, 500));
            
            switch (data.gameName) {
                case 'tictactoe':
                    initTicTacToe();
                    break;
                case 'memory':
                    initMemory();
                    break;
                case 'seabattle':
                    initSeaBattle();
                    break;
                case 'truthslie':
                    initTruthsLie();
                    break;
                case 'cipher':
                    initCipher();
                    break;
            }
            break;
            
        case 'investigation':
            await startInvestigation(data.id);
            break;
            
        case 'ending':
            await typeLines(data.lines);
            showButtons([{ text: 'НАЧАТЬ СНАЧАЛА', primary: true, action: () => restart() }]);
            break;
    }
}

function nextLevel() {
    const data = questData[currentLevel];
    if (data && data.nextLevel !== null && data.nextLevel !== undefined) {
        currentLevel = data.nextLevel;
        startLevel();
    }
}

async function restart() {
    currentLevel = 0;
    gameAttempts = 0;
    totalAttempts = { tictactoe: 0, memory: 0, seabattle: 0 };
    startLevel();
}

function init() {
    initAudio();
    
    userInput.addEventListener('keydown', async (e) => {
        if (e.key === 'Enter') {
            const answer = userInput.value.trim();
            if (!answer) return;
            
            const data = questData[currentLevel];
            if (data && data.gameName === 'cipher') {
                checkCipherAnswer(answer);
            }
        }
    });
    
    document.addEventListener('click', () => {
        playBgLoop();
    }, { once: true });
    
    startLevel();
}

document.addEventListener('DOMContentLoaded', init);
