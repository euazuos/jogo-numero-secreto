function validacao() {
    const numero = +chute;

    if (conferir(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: o numero precisa estar entre ${menorValor} e ${maiorValor}</div>`;
    }

    if (numero === numeroSecreto) {
     
        document.body.innerHTML = `
        <h2>Você Acertou!!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <span class="reload">Fale "reiniciar" para começar novamente</span>
        `;
        confetti();
    } 
    
    if (numero > numeroSecreto && numero < maiorValor) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `;
    } 
    if (chute < numeroSecreto && numero > menorValor) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
    `;
    }

};

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function conferir(numero) {
    return numero > maiorValor || numero < menorValor;
}

// document.body.addEventListener('click', e => {
//     if (e.target.id == 'btn') {
//       window.location.reload();
//     }
// });