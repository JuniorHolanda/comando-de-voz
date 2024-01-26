const elementoChute = document.querySelector('#chute')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.leng = 'pt-Br';
recognition.start()

recognition.addEventListener('result', onSpeak);

function onSpeak (e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
}

function exibeChuteNaTela (chute) {
    elementoChute.innerHTML = `
        <div>Voce disse:</div>
        <span class="box">${chute}</span>
    `
}