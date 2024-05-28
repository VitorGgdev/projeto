// script.js

// Função para tocar som
function tocarSom(selector) {
    const audio = document.querySelector(selector);
    if (audio) {
        audio.currentTime = 0; // Rewind to the start
        audio.play();
    }
}

// Função para adicionar a classe 'pressed' ao botão
function pressButton(button) {
    if (button) {
        button.classList.add('pressed');
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 100); // Remove a classe após 100 ms
    }
}

// Adicionar event listeners aos botões
document.querySelectorAll('.set button').forEach(button => {
    button.addEventListener('click', () => {
        const audioSelector = `#${button.id} + audio`;
        tocarSom(audioSelector);
        pressButton(button);
    });
});

// Adicionar event listener para teclas
document.addEventListener('keydown', (event) => {
    let button;
    switch (event.key) {
        case 'a':
            tocarSom('audio[src="./assets/sounds/kickbass.mp3"]');
            button = document.querySelector('#kick');
            break;
        case 's':
            tocarSom('audio[src="./assets/sounds/leftCrash.mp3"]');
            button = document.querySelector('#left');
            break;
        case 'd':
            tocarSom('audio[src="./assets/sounds/rightCrash.mp3"]');
            button = document.querySelector('#right');
            break;
        case 'j':
            tocarSom('audio[src="./assets/sounds/snare.mp3"]');
            button = document.querySelector('#snare');
            break;
        case 'k':
            tocarSom('audio[src="./assets/sounds/tom1.mp3"]');
            button = document.querySelector('#tom1');
            break;
        case 'l':
            tocarSom('audio[src="./assets/sounds/tom2.mp3"]');
            button = document.querySelector('#tom2');
            break;
        case 'ç':
            tocarSom('audio[src="./assets/sounds/tom3.mp3"]');
            button = document.querySelector('#tom3');
            break;
        default:
            break;
    }
    pressButton(button);
});


