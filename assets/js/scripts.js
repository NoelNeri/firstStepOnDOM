function mudaModo()  {
    mudaClasses();
    mudatexto();
}

function mudaClasses() {
    button.classList.toggle(modoEscuroclass);
    h1.classList.toggle(modoEscuroclass);
    body.classList.toggle(modoEscuroclass);
    footer.classList.toggle(modoEscuroclass);
}

function mudatexto() {
    const modoClaro = 'Modo Claro';
    const modoEscuro = 'Modo Escuro';

const modoEscuroclass = 'modo-escuro';
    if (body.classList.contains(modoEscuroclass)) {
        button.innerHTML = modoClaro;
        h1.innerHTML = modoEscuro + " ON";
        return;
    }
    
    button.innerHTML = modoEscuro;
    h1.innerHTML = modoClaro + " ON";
    return;

}

const modoEscuroclass = 'modo-escuro';

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


button.addEventListener('click', mudaModo);

