const elementoChute = document.getElementById('chute');
const btn = document.getElementById('btn');

let interruptor = true;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    chute = event.results[0][0].transcript;

    if (chute === 'parar reconhecimento') {
        interruptor = false;
        console.log('parou reconhecimento');
    }

    if (interruptor === true) {

        if (chute === 'reiniciar') {
            window.location.reload();
            return;
        }
    
        exibeChuteNaTela(chute);
        console.log(chute);
        validacao(chute);

    }

    if (chute === 'continuar reconhecimento') {
        interruptor = true;
        console.log('voltou');
    }
}

function exibeChuteNaTela(chute) {
    
    if (isNaN(chute)) {
        elementoChute.innerHTML = `
    <span class="box">Valor invalido</span>
    `;

    return;
    } else {       
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `;
    }

}

recognition.addEventListener('end', () => recognition.start());