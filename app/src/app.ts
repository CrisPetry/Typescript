import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Verifique se o form existe.');
}

const importButton = document.querySelector('#botao-importar');

if (importButton) {
    importButton.addEventListener('click', () => {
        controller.importarDados();
    });
} else {
    throw Error('Botão importar não foi encontrado!');
}


